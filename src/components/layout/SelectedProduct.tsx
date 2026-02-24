import { useParams } from "react-router-dom";
import { useState } from "react";
import { Tag } from "../ui/Tag";
import type { SelectedProductProps } from "../../types/product";
import { Icons } from "../Icons";
import { Button } from "../ui/Button";
import { StrokeButton } from "../ui/StrokeButton";

export const SelectedProduct = () => {
  const { id } = useParams<{ id: string }>();

  // Mock data - in real app, fetch from API based on id
  const mockProducts: Record<string, SelectedProductProps> = {
    "1": {
      serviceTitle: "Free Fire",
      details: [
        {
          quantity: 5,
          available: true,
          finalPrice: [2, 3.5, 6],
          amount: ["100 Diamantes", "300 Diamantes", "500 Diamantes"],
          serviceImage:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl8ChEz5aiEtyp5HkGleh0-J3JH8tUGCF3Hw&s",
        },
      ],
    },
    "2": {
      serviceTitle: "Clash Royale",
      details: [
        {
          quantity: 5,
          available: true,
          finalPrice: [2, 3.5, 6],
          amount: ["100 Gemas", "200 Gemas", "Pass Royale"],
          serviceImage:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl8ChEz5aiEtyp5HkGleh0-J3JH8tUGCF3Hw&s",
        },
      ],
    },
    // Add more as needed
  };

  const product = id ? mockProducts[id] : null;

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  // Estado para las selecciones
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [selectedTypeIndex, setSelectedTypeIndex] = useState(0);
  const [isQuantityDropdownOpen, setIsQuantityDropdownOpen] = useState(false);
  const [isTypeDropdownOpen, setIsTypeDropdownOpen] = useState(false);

  // Opciones de cantidad (asumiendo de 1 a 5 basado en quantity: 5)
  const quantityOptions = Array.from(
    { length: product.details[0].quantity },
    (_, i) => i + 1,
  );

  // Calcular precio final basado en cantidad y tipo
  const finalPrice =
    product.details[0].finalPrice[selectedTypeIndex] * selectedQuantity;

  // Actualizar título dinámicamente
  const dynamicTitle = `${product.serviceTitle} | ${product.details[0].amount[selectedTypeIndex]}`;

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-normal gap-4 md:gap-6 pb-8 sm:pb-12">
      <img
        className="w-full xs:w-10/12 sm:size-72 rounded-md"
        src={product.details[0].serviceImage}
        alt={`Imagen de ${dynamicTitle}`}
      />
      <div className="flex flex-col gap-3 w-full  py-4 sm:py-0 xs:w-10/12 sm:w-full">
        <div className="flex flex-col">
          <Tag available={product.details[0].available} />
          <span className="text-2xl sm:text-3xl font-rethink font-semibold tracking-tight pt-1 sm:pt-2 sm:pb-1 text-wrap">
            {dynamicTitle}
          </span>
          <span className="text-2xl sm:text-3xl text-brand-sky font-geist font-semibold tracking-tight w-fit">
            {finalPrice.toFixed(2)}$
          </span>
        </div>
        <div className="flex items-center gap-x-3 text-white/60">
          <div className="flex items-center gap-x-2 relative">
            <span>Cantidad: </span>
            <div
              className="flex items-center gap-x-3 py-0.5 px-2 bg-background1 rounded-sm text-white/60 cursor-pointer active:ring-1 active:ring-white/30 transition-all duration-100"
              onClick={() => setIsQuantityDropdownOpen(!isQuantityDropdownOpen)}
            >
              <span>{selectedQuantity}</span>
              <Icons.Arrow
                width={7}
                height={11}
                className={`rotate-270 transition-transform ${isQuantityDropdownOpen ? "rotate-90" : ""}`}
              />
            </div>
            {isQuantityDropdownOpen && (
              <ul className="absolute top-full overflow-clip mt-2 bg-background1 rounded-sm shadow-lg z-10 right-0 divide-y divide-white/5">
                {quantityOptions.map((qty) => (
                  <li
                    key={qty}
                    className="hover:bg-white/10 cursor-pointer text-white/60 text-center "
                    onClick={() => {
                      setSelectedQuantity(qty);
                      setIsQuantityDropdownOpen(false);
                    }}
                  >
                    <div className="px-4 py-1">{qty}</div>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="flex items-center gap-x-2 relative">
            <span>Tipo: </span>
            <div
              className="flex items-center gap-x-3 py-0.5 px-2 bg-background1 rounded-sm text-white/60 cursor-pointer active:ring-1 active:ring-white/30 transition-all duration-100"
              onClick={() => setIsTypeDropdownOpen(!isTypeDropdownOpen)}
            >
              <span>{product.details[0].amount[selectedTypeIndex]}</span>
              <Icons.Arrow
                width={7}
                height={11}
                className={`rotate-270 transition-transform ${isTypeDropdownOpen ? "rotate-90" : ""}`}
              />
            </div>
            {isTypeDropdownOpen && (
              <ul className="absolute top-full mt-2 bg-background1 rounded-sm shadow-lg z-10 divide-y divide-white/5 overflow-clip right-0">
                {product.details[0].amount.map((amount, index) => (
                  <li
                    key={index}
                    className="hover:bg-white/10 cursor-pointer text-white/60"
                    onClick={() => {
                      setSelectedTypeIndex(index);
                      setIsTypeDropdownOpen(false);
                    }}
                  >
                    <div className="px-3 py-2">{amount}</div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className="w-fit flex items-center gap-x-2">
          <Button padding="px-4 sm:px-3 md:px-5 py-2">
            Comprar Ahora
          </Button>
          <StrokeButton padding="px-4 sm:px-3 md:px-5 py-2 gap-x-1 sm:gap-x-1 md:gap-x-2">
            Agregar al Carrito
            <Icons.Shopcart size={12}  />
          </StrokeButton>
        </div>
      </div>
    </div>
  );
};
