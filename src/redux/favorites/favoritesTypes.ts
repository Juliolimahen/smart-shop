import type { Product } from '../../types';

export type FavoriteEntry = Product & { favoritedAt: number };

export interface FavoritesState {
  favorites: FavoriteEntry[];
}
