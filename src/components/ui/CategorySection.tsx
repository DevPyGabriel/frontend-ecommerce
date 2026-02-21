import { ProductCard } from "./ProductCard";
import type { CategoryGroup } from "../../types/product";

export const CategorySection = ({ categoryName, products }: CategoryGroup) => {

  const rowConfig = products.length > 5 ? "grid-rows-2 md:grid-rows-1" : "md:grid-rows-1";
  
  return (
    <section className="bg-background0 font-rethink pb-6">
      <h2 className="text-2xl pb-2 tracking-tight font-semibold">
        {categoryName}
      </h2>
      
      <div className={`
        grid ${rowConfig} grid-flow-col gap-4 
        overflow-x-auto pb-4 
        snap-x snap-mandatory
        scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent w-fit max-w-full
        
      `}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};