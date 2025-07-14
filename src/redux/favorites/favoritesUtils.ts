import type { FavoriteEntry } from './favoritesTypes';
import type { Product } from '../../types';

export function applyCategoryLimit(
  favorites: FavoriteEntry[],
  newProduct: Product,
  maxPerCategory = 2
): FavoriteEntry[] {
  const updated = [...favorites];
  const removedIds = new Set<number>();

  for (const catId of newProduct.categorias) {
    const sameCategory = updated.filter(
      p => p.categorias.includes(catId) && !removedIds.has(p.id)
    );

    if (sameCategory.length >= maxPerCategory) {
      const oldest = sameCategory.reduce((a, b) =>
        a.favoritedAt < b.favoritedAt ? a : b
      );
      const indexToRemove = updated.findIndex(p => p.id === oldest.id);
      if (indexToRemove !== -1) {
        removedIds.add(updated[indexToRemove].id);
        updated.splice(indexToRemove, 1);
      }
    }
  }

  updated.push({ ...newProduct, favoritedAt: Date.now() });
  return updated;
}
