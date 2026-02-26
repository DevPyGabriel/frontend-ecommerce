import type { CategoryGroup } from "../../../types/product";
import { CategorySection } from "./CategorySection";

export const Products = () => {
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
          variants: [
            {
              id: 1,
              name: "variante 1",
              price: 1,
            },
            {
              id: 2,
              name: "variante 2",
              price: 1,
            },
          ],
        },
        {
          id: "2",
          title: "Clash Royale",
          description: "Sin comisiones ocultas, 24/7.",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeJQeJyzgAzTEVqXiGe90RGBFhfp_4RcJJMQ&s",
          link: "/recarga-digitel",
          variants: [
            {
              id: 1,
              name: "variante 1",
              price: 1,
            },
            {
              id: 2,
              name: "variante 2",
              price: 1,
            },
          ],
        },
        {
          id: "3",
          title: "League of Legends",
          description: "Sin comisiones ocultas, 24/7.",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeJQeJyzgAzTEVqXiGe90RGBFhfp_4RcJJMQ&s",
          link: "/recarga-digitel",
          variants: [
            {
              id: 1,
              name: "variante 1",
              price: 1,
            },
            {
              id: 2,
              name: "variante 2",
              price: 1,
            },
          ],
        },
        {
          id: "4",
          title: "Roblox",
          description: "Sin comisiones ocultas, 24/7.",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeJQeJyzgAzTEVqXiGe90RGBFhfp_4RcJJMQ&s",
          link: "/recarga-digitel",
          variants: [
            {
              id: 1,
              name: "variante 1",
              price: 1,
            },
            {
              id: 2,
              name: "variante 2",
              price: 1,
            },
          ],
        },
        {
          id: "5",
          title: "Fortnite",
          description: "Sin comisiones ocultas, 24/7.",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeJQeJyzgAzTEVqXiGe90RGBFhfp_4RcJJMQ&s",
          link: "/recarga-digitel",
          variants: [
            {
              id: 1,
              name: "variante 1",
              price: 1,
            },
            {
              id: 2,
              name: "variante 2",
              price: 1,
            },
          ],
        },
        {
          id: "6",
          title: "COD Mobile",
          description: "Sin comisiones ocultas, 24/7.",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeJQeJyzgAzTEVqXiGe90RGBFhfp_4RcJJMQ&s",
          link: "/recarga-digitel",
          variants: [
            {
              id: 1,
              name: "variante 1",
              price: 1,
            },
            {
              id: 2,
              name: "variante 2",
              price: 1,
            },
          ],
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
          variants: [
            {
              id: 1,
              name: "variante 1",
              price: 1,
            },
            {
              id: 2,
              name: "variante 2",
              price: 1,
            },
          ],
        },
        {
          id: "11",
          title: "Apple Gift Card",
          description: "Envío digital instantáneo.",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeJQeJyzgAzTEVqXiGe90RGBFhfp_4RcJJMQ&s",
          link: "/amazon",
          variants: [
            {
              id: 1,
              name: "variante 1",
              price: 1,
            },
            {
              id: 2,
              name: "variante 2",
              price: 1,
            },
          ],
        },
        {
          id: "12",
          title: "Xbox Gift Card",
          description: "Envío digital instantáneo.",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeJQeJyzgAzTEVqXiGe90RGBFhfp_4RcJJMQ&s",
          link: "/amazon",
          variants: [
            {
              id: 1,
              name: "variante 1",
              price: 1,
            },
            {
              id: 2,
              name: "variante 2",
              price: 1,
            },
          ],
        },
        {
          id: "13",
          title: "PlayStation Gift Card",
          description: "Envío digital instantáneo.",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeJQeJyzgAzTEVqXiGe90RGBFhfp_4RcJJMQ&s",
          link: "/amazon",
          variants: [
            {
              id: 1,
              name: "variante 1",
              price: 1,
            },
            {
              id: 2,
              name: "variante 2",
              price: 1,
            },
          ],
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
