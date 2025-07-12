import mockProductsData from '../data/produtos_com_variacoes.json';
import type { ProductPage } from '../types';
import { normalizeProducts } from '../utils/normalizeProducts';
import { filterByCategory, sortByPrice } from '../utils/productUtils';

export const getProducts = async (
  page: number = 0, size: number = 10, categoryId?: number | null, searchTerm?: string
): Promise<ProductPage> => {
  await new Promise(resolve => setTimeout(resolve, 500));

  const normalized = normalizeProducts(mockProductsData);
  const filtered = filterByCategory(normalized, categoryId);
  const searched = searchTerm?.trim()
    ? filtered.filter(p =>
      p.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.descricao.toLowerCase().includes(searchTerm.toLowerCase()))
    : filtered;

  const sorted = sortByPrice(searched);

  const startIndex = page * size;
  const endIndex = startIndex + size;

  return {
    content: sorted.slice(startIndex, endIndex),
    first: page === 0,
    last: endIndex >= sorted.length,
    number: page,
    totalElements: sorted.length,
    totalPages: Math.ceil(sorted.length / size)
  };
};
