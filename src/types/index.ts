export type Category = {
  id: number;
  nome: string;
};

export type ProductVariant = {
  estoque: string;
  vendedor: string;
  fabricante: string;
  cor: string;
  voltagem: string;
  tamanho: string;
  garantia: string;
  peso: string;
  dimensoes: string | null;
};

export type Product = {
  id: number;
  nome: string;
  categorias: number[];
  preco: string;
  descricao: string;
  imagem?: string;
  variacao: ProductVariant[];
  isFavorite?: boolean;
};

export interface ProductPage {
  number: number;
  content: Product[];
  totalPages: number;
  totalElements: number;
  first: boolean;
  last: boolean;
}
