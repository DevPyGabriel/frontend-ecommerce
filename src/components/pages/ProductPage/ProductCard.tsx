import { Link } from "react-router-dom";

import type { Product } from "../../../types/product";
import { Icons } from "../../Icons";

export const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Link
      to={`product?id=${product.id}`}
      className="w-64 shrink-0 tracking-[-0.02em] rounded-md overflow-hidden bg-background1 cursor-pointer transition-all duration-300 group block"
    >
      <div className="h-42 overflow-hidden">
        <img
          src={product.img}
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="flex flex-col w-full p-3">
        <div className="flex w-full items-center justify-between pb-1">
          <div className="font-geist text-white/50 font-medium group-hover:text-white transition-all duration-200">
            {product.title}
          </div>

          <div className="flex items-center gap-x-1 text-brand-sky text-sm font-semibold">
            <span>Ver más</span>
            <Icons.ArrowLabel />
          </div>
        </div>

        <p className="text-white/20 font-normal leading-4 text-sm line-clamp-2">
          {product.description}
        </p>
      </div>
    </Link>
  );
};
