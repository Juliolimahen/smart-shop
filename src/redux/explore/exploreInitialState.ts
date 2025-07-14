import type { ExploreState } from './exploreTypes';

export const initialExploreState: ExploreState = {
  category: null,
  searchTerm: '',
  currentPage: 0,
  products: [],
  totalPages: 1,
  selectedProduct: null,
  minPrice: null,
  maxPrice: null,
  orderByPrice: null
};
