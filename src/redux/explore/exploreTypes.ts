import type { Product } from '../../types';

export interface ExploreState {
  category: number | null;
  searchTerm: string;
  currentPage: number;
  products: Product[];
  totalPages: number;
  selectedProduct: Product | null;
  minPrice: number | null;
  maxPrice: number | null;
  orderByPrice: 'asc' | 'desc' | null;
}

export interface ProductsPayload {
  products: Product[];
  totalPages: number;
}

export interface PriceRangePayload {
  minPrice: number | null;
  maxPrice: number | null;
}

export interface FavoriteStatusPayload {
  id: number;
  isFavorite: boolean;
}
