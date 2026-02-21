import type { CategoryGroup } from "../../types/product";
import { CategorySection } from "../ui/CategorySection";

export const Products = () => {
  // Mock de datos: Esto vendría de tu backend o estado global
  const data: CategoryGroup[] = [
    {
      categoryName: "Servicios de Recarga",
      products: [
        {
          id: "1",
          title: "Free Fire",
          description: "Saldo inmediato para tu línea prepago.",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeJQeJyzgAzTEVqXiGe90RGBFhfp_4RcJJMQ&s",
          link: "/recarga-movistar",
        },
        {
          id: "2",
          title: "Clash Royale",
          description: "Sin comisiones ocultas, 24/7.",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeJQeJyzgAzTEVqXiGe90RGBFhfp_4RcJJMQ&s",
          link: "/recarga-digitel",
        },
        {
          id: "3",
          title: "League of Legends",
          description: "Sin comisiones ocultas, 24/7.",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeJQeJyzgAzTEVqXiGe90RGBFhfp_4RcJJMQ&s",
          link: "/recarga-digitel",
        },
        {
          id: "4",
          title: "Roblox",
          description: "Sin comisiones ocultas, 24/7.",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeJQeJyzgAzTEVqXiGe90RGBFhfp_4RcJJMQ&s",
          link: "/recarga-digitel",
        },
        {
          id: "5",
          title: "Fortnite",
          description: "Sin comisiones ocultas, 24/7.",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeJQeJyzgAzTEVqXiGe90RGBFhfp_4RcJJMQ&s",
          link: "/recarga-digitel",
        },
        {
          id: "6",
          title: "COD Mobile",
          description: "Sin comisiones ocultas, 24/7.",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeJQeJyzgAzTEVqXiGe90RGBFhfp_4RcJJMQ&s",
          link: "/recarga-digitel",
        },
      ],
    },
    {
      categoryName: "Tarjetas de Regalo",
      products: [
        {
          id: "10",
          title: "Amazon Gift Card",
          description: "Envío digital instantáneo.",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeJQeJyzgAzTEVqXiGe90RGBFhfp_4RcJJMQ&s",
          link: "/amazon",
        },
        {
          id: "11",
          title: "Apple Gift Card",
          description: "Envío digital instantáneo.",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeJQeJyzgAzTEVqXiGe90RGBFhfp_4RcJJMQ&s",
          link: "/amazon",
        },
        {
          id: "12",
          title: "Xbox Gift Card",
          description: "Envío digital instantáneo.",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeJQeJyzgAzTEVqXiGe90RGBFhfp_4RcJJMQ&s",
          link: "/amazon",
        },
        {
          id: "13",
          title: "PlayStation Gift Card",
          description: "Envío digital instantáneo.",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeJQeJyzgAzTEVqXiGe90RGBFhfp_4RcJJMQ&s",
          link: "/amazon",
        },
      ],
    },
  ];

  return (
    <main>
      {data.map((item, id) => (
        <CategorySection
          key={id}
          categoryName={item.categoryName}
          products={item.products}
        />
      ))}
    </main>
  );
};
