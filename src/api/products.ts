import mockProductsData from '../data/produtos_com_variacoes.json';
import type { ProductPage } from '../types';
import { normalizeProducts } from '../utils/normalizeProducts';

export const getProducts = async (
  page: number = 0,
  size: number = 8,
  category: number | null,
  searchTerm?: string
): Promise<ProductPage> => {
  await new Promise(resolve => setTimeout(resolve, 500));

  const normalized = normalizeProducts(mockProductsData);

  const categorized = category !== null
    ? normalized.filter(p =>
        Array.isArray(p.categorias) && p.categorias.includes(category)
      )
    : normalized;

  const searched = searchTerm?.trim()
    ? categorized.filter(p =>
        (p.nome ?? '').toLowerCase().includes(searchTerm.toLowerCase()) ||
        (p.descricao ?? '').toLowerCase().includes(searchTerm.toLowerCase())
      )
    : categorized;

  const startIndex = page * size;
  const endIndex = startIndex + size;

  return {
    content: searched.slice(startIndex, endIndex),
    first: page === 0,
    last: endIndex >= searched.length,
    number: page,
    totalElements: searched.length,
    totalPages: Math.ceil(searched.length / size)
  };
};
