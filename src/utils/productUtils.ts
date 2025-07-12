import type { Product } from '../types';
import { parsePrice } from './parsePrice';

export const filterByCategory = (products: Product[], categoryId?: number | null) => {
  return categoryId != null
    ? products.filter(product => product.categorias.includes(categoryId))
    : [...products];
};

export const sortByPrice = (products: Product[]) => {
  return [...products].sort((a, b) => {
    const priceA = parsePrice(a.preco) ?? Infinity;
    const priceB = parsePrice(b.preco) ?? Infinity;
    return priceA - priceB;
  });
};
