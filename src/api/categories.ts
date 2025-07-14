import categoriesData from '../data/categorias.json';
import type { Category } from '../types';

export const categories: Category[] = categoriesData;

export const getAllCategories = (): Category[] => {
  return categories;
};

export const getCategoryName = (id: number): string =>
  categories.find(cat => cat.id === id)?.nome || 'Categoria não encontrada';
