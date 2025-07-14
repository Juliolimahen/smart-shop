import type { Product } from '../types';
import { parsePrice } from './parsePrice';

export const filterByPriceRange = (
  products: Product[],
  min: number = 0,
  max: number = Infinity
): Product[] => {
  return products.filter(product => {
    const price = parsePrice(product.preco);

    if (price === null || isNaN(price)) return true;

    return price >= min && price <= max;
  });
};
