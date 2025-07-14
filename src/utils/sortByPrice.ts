import type { Product } from '../types';
import { parsePrice } from './parsePrice';

export const sortByPrice = (products: Product[]): Product[] => {
  return [...products].sort((a, b) => {
    const priceA = parsePrice(a.preco);
    const priceB = parsePrice(b.preco);

    if (priceA === null && priceB === null) return 0;
    if (priceA === null) return 1;
    if (priceB === null) return -1;

    return priceA - priceB;
  });
};

export const sortByPriceDesc = (products: Product[]): Product[] => {
  return [...products].sort((a, b) => {
    const priceA = parsePrice(a.preco);
    const priceB = parsePrice(b.preco);

    if (priceA === null && priceB === null) return 0;
    if (priceA === null) return 1;
    if (priceB === null) return -1;

    return priceB - priceA;
  });
};
