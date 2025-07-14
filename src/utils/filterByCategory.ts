import type { Product } from '../types';

export const filterByCategory = (products: Product[], categoryId?: number | null) => {
  return categoryId != null
    ? products.filter(product => product.categorias.includes(categoryId))
    : [...products];
};
