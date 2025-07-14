import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Product } from '../../types';
import type {
  ProductsPayload,
  PriceRangePayload,
  FavoriteStatusPayload
} from './exploreTypes';
import { initialExploreState } from './exploreInitialState';

const exploreSlice = createSlice({
  name: 'explore',
  initialState: initialExploreState,
  reducers: {

    setCategory(state, action: PayloadAction<number | null>) {
      state.category = action.payload;
    },
    setSearchTerm(state, action: PayloadAction<string>) {
      state.searchTerm = action.payload;
    },
    setPriceRange(state, action: PayloadAction<PriceRangePayload>) {
      state.minPrice = action.payload.minPrice;
      state.maxPrice = action.payload.maxPrice;
    },
    setOrderByPrice(state, action: PayloadAction<'asc' | 'desc' | null>) {
      state.orderByPrice = action.payload;
    },

    setProducts(state, action: PayloadAction<ProductsPayload>) {
      state.products = action.payload.products;
      state.totalPages = action.payload.totalPages;
    },
    setSelectedProduct(state, action: PayloadAction<Product | null>) {
      state.selectedProduct = action.payload;
    },
    updateFavoriteStatus(state, action: PayloadAction<FavoriteStatusPayload>) {
      if (state.selectedProduct?.id === action.payload.id) {
        state.selectedProduct.isFavorite = action.payload.isFavorite;
      }
    },

    setPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    }
  }
});

export const {
  setCategory,
  setSearchTerm,
  setPriceRange,
  setOrderByPrice,
  setProducts,
  setSelectedProduct,
  updateFavoriteStatus,
  setPage
} = exploreSlice.actions;

export default exploreSlice.reducer;
