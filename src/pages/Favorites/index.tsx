import { Title, Alert, Container } from './styles';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import type { Product } from '../../types';
import type { RootState } from '../../redux/store';
import ProductCard from '../../Components/ProductCard';
import { ProductModal } from '../../Components/ProductModal';
import { GridContainer } from '../../Components/ProductList/styles';


const FavoritesPage: React.FC = () => {
  const favorites = useSelector((state: RootState) => state.favorites.favorites);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <Container>
      <Title>Meus Favoritos</Title>

      {favorites.length === 0 ? (
        <Alert>Nenhum produto favoritado ainda.</Alert>
      ) : (
        <GridContainer>
          {favorites.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={() => setSelectedProduct(product)}
            />
          ))}
        </GridContainer>
      )}

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </Container>
  );
};

export default FavoritesPage;
