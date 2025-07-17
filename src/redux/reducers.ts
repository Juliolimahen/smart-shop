import exploreReducer from './explore/exploreSlice';
import favoritesReducer from './favorites/favoritesSlice';
import { createPersistedReducer } from './persistUtils';

export const rootReducer = {
  explore: createPersistedReducer('explore', exploreReducer),
  favorites: createPersistedReducer('favorites', favoritesReducer)
};
