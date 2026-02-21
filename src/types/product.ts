export interface Product {
  id: string;
  title: string;
  description: string;
  img: string;
  link: string;
}

export interface CategoryGroup {
  categoryName: string;
  products: Product[];
}