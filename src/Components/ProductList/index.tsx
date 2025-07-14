import React from 'react';
import type { Product } from '../../types';
import { ProductCard } from '../ProductCard';
import { GridContainer } from './styles';

interface Props {
  products: Product[];
  onProductClick: (product: Product) => void;
}

const ProductList: React.FC<Props> = ({ products, onProductClick }) => {
  return (
    <GridContainer>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onClick={onProductClick} />
      ))}
    </GridContainer>
  );
};

export default ProductList;
