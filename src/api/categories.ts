import categoriesData from '../data/categorias.json';
import type { Category } from '../types';

export const categories: Category[] = categoriesData;

export const getAllCategories = (): Promise<Category[]> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(categories);
    }, 500);
  });
};

export const getCategoryName = (id: number): string =>
  categories.find(cat => cat.id === id)?.nome || 'Categoria não encontrada';
