import React from 'react';
import type { Product } from '../../types';
import { getCategoryName } from '../../api/categories';
import {
  Card,
  FavoriteArea,
  ImageArea,
  NoImage,
  Content,
  Title,
  Price,
  Description,
  ChipList,
  Chip
} from './styles';
import { FavoriteButton } from '../FavoriteButton';

import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../redux/store';
import { addFavorite, removeFavorite } from '../../redux/favorites/favoritesSlice';

interface Props {
  product: Product;
  onClick: (product: Product) => void;
}

export const ProductCard: React.FC<Props> = ({ product, onClick }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state: RootState) => state.favorites.favorites);
  const favorite = favorites.some(p => p.id === product.id);

  const handleToggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (favorite) {
      dispatch(removeFavorite(product.id));
    } else {
      dispatch(addFavorite(product));
    }
  };


  return (
    <Card onClick={() => onClick(product)} role="button" tabIndex={0}>
      <FavoriteArea>
        <FavoriteButton $favorite={favorite} onClick={handleToggleFavorite} />
      </FavoriteArea>

      {product.imagem ? (
        <ImageArea>
          <img src={product.imagem} alt={product.nome} loading="lazy" />
        </ImageArea>
      ) : (
        <NoImage>Sem imagem</NoImage>
      )}

      <Content>
        <Title>{product.nome}</Title>
        <Price>
          {product.preco?.includes('Preço não disponível')
            ? product.preco
            : `R$ ${product.preco}`}
        </Price>
        <Description>{product.descricao}</Description>
        <ChipList>
          {product.categorias.map((id) => (
            <Chip key={id}>{getCategoryName(id)}</Chip>
          ))}
        </ChipList>
      </Content>
    </Card>
  );
};

export default ProductCard;
