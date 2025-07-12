import type { Product } from '../types';
import { parsePrice } from '../utils/parsePrice';
import { normalizeVariations } from '../utils/normalizeVariations';

export const normalizeProducts = (products: unknown[]): Product[] => {
  if (!Array.isArray(products)) return [];

  return products.map(item => {
    const defaultProduct: Product = {
      id: -1,
      nome: 'nome desconhecido',
      categorias: [],
      preco: 'preço não disponivel',
      descricao: 'descrição não disponivel',
      variacao: []
    };

    if (typeof item !== 'object' || item === null) return defaultProduct;

    const record = item as Record<string, unknown>;
    const priceValue = parsePrice(record.preco);
    const formattedPrice = priceValue !== null
      ? priceValue.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
      : defaultProduct.preco;

    return {
      id: typeof record.id === 'number' ? record.id : defaultProduct.id,
      nome: typeof record.nome === 'string' ? record.nome : defaultProduct.nome,
      categorias: Array.isArray(record.categorias)
        ? record.categorias.filter((id): id is number => typeof id === 'number')
        : defaultProduct.categorias,
      preco: formattedPrice,
      descricao: typeof record.descricao === 'string' ? record.descricao : defaultProduct.descricao,
      variacao: normalizeVariations(record.variacao)
    };
  });
};
