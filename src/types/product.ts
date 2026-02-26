export interface Variant {
  id: number;
  name: string;
  price: number;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  img: string;
  link: string;
  variants: Variant[];
}

export interface CategoryGroup {
  categoryName: string;
  products: Product[];
}

export interface ServiceData {
  quantity: number;
  available: boolean;
  finalPrice: number[];
  amount: string[];
  serviceImage: string;
}

export interface SelectedProductProps {
  serviceTitle: string;
  details: ServiceData[];
}
