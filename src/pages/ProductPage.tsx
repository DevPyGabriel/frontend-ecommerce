import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { fetchProducts } from "../ts/api";
import type { Product } from "../types/product";

import { Tag } from "../components/ui/Tag";
import { Button } from "../components/ui/Button";
import { StrokeButton } from "../components/ui/StrokeButton";
import { Icons } from "../components/Icons";
import { Products } from "../components/pages/ProductPage/Products";

export const ProductPage = () => {
  const [loading, setLoading] = useState(false);
  const [searchParams] = useSearchParams();

  const id = searchParams.get("id");
  const [product, setProduct] = useState<Product[] | null>();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchProducts(id);
      setProduct(response.data);

      setLoading(false);
    };

    fetchData();
  }, []);

  const data = {
    // comprarProducto(data)...
    product_id: 1,
    variant_id: 1,
    amount: 2,
  };
  console.log(data);

  const product_temp = {
    id: "5",
    title: "Fortnite",
    description: "Sin comisiones ocultas, 24/7.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeJQeJyzgAzTEVqXiGe90RGBFhfp_4RcJJMQ&s",
    link: "/recarga-digitel",
    variants: [
      // tienes que iterar en esto.
      {
        id: 1,
        name: "variante 1",
        price: 1.5,
      },
      {
        id: 2,
        name: "variante 2",
        price: 1,
      },
    ],
  };

  return (
    <>
      {loading ? (
        <h1>cargando pendejo</h1>
      ) : (
        <div
          className="flex flex-col sm:flex-row items-center justify-center sm:justify-normal gap-4 md:gap-6 pb-8 sm:pb-12"
          style={{ marginBottom: "6px" }}
        >
          <img
            className="w-full xs:w-10/12 sm:size-72 rounded-md"
            src={product_temp.img}
            alt={`Imagen de ${product_temp.title}`}
          />
          <div className="flex flex-col gap-3 w-full  py-4 sm:py-0 xs:w-10/12 sm:w-full">
            <div className="flex flex-col">
              <Tag available={false} />
              <span className="text-2xl sm:text-3xl font-rethink font-semibold tracking-tight pt-1 sm:pt-2 sm:pb-1 text-wrap">
                {product_temp.title} | 110 diamantes
              </span>
              <span className="text-2xl sm:text-3xl text-brand-sky font-geist font-semibold tracking-tight w-fit">
                ${222.22}
              </span>
            </div>
            <div className="flex items-center gap-x-3 text-white/60 pb-2">
              <div className="flex items-center gap-x-2 relative">
                <span>Cantidad: </span>
                <div className="flex items-center gap-x-3 py-0.5 px-2 bg-background1 rounded-sm text-white/60 cursor-pointer active:ring-1 active:ring-white/30 transition-all duration-100">
                  <span>{1}</span>
                  <Icons.Arrow
                    width={7}
                    height={11}
                    className={`rotate-270 transition-transform`}
                  />
                </div>
              </div>
              <div className="flex items-center gap-x-2 relative">
                <span>Tipo: </span>
                <div className="flex items-center gap-x-3 py-0.5 px-3 bg-background1 rounded-sm text-white/60 cursor-pointer active:ring-1 active:ring-white/30 transition-all duration-100">
                  <span>ni idea que va aqui</span>
                  <Icons.Arrow
                    width={7}
                    height={11}
                    className={`rotate-270 transition-transform`}
                  />
                </div>
              </div>
            </div>
            <div className="w-fit flex items-center gap-x-2">
              <Button padding="px-4 sm:px-3 md:px-5 py-2">Comprar Ahora</Button>
              <StrokeButton padding="px-4 sm:px-3 md:px-5 py-2 gap-x-1 sm:gap-x-1 md:gap-x-2">
                Agregar al Carrito
                <Icons.Shopcart size={12} />
              </StrokeButton>
            </div>
          </div>
        </div>
      )}

      <Products />
    </>
  );
};
