import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Product } from '../../types';
import type { FavoritesState } from './favoritesTypes';
import { applyCategoryLimit } from './favoritesUtils';

const initialState: FavoritesState = {
  favorites: []
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite(state, action: PayloadAction<Product>) {
      const alreadyFavorited = state.favorites.some(p => p.id === action.payload.id);
      if (alreadyFavorited) return;

      state.favorites = applyCategoryLimit(state.favorites, action.payload);
    },

    removeFavorite(state, action: PayloadAction<number>) {
      state.favorites = state.favorites.filter(p => p.id !== action.payload);
    }
  }
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
