import React from 'react';
import type { Product } from '../../types';
import type { RootState } from '../../redux/store';
import { FavoriteButton } from '../FavoriteButton';
import { useDispatch, useSelector } from 'react-redux';
import { getCategoryName } from '../../api/categories';
import { updateFavoriteStatus } from '../../redux/explore/exploreSlice';
import { addFavorite, removeFavorite } from '../../redux/favorites/favoritesSlice';

import {
  ModalOverlay,
  ModalContent,
  ModalImage,
  ModalHeader,
  ModalTitle,
  ModalClose,
  ModalBody,
  ModalSection,
  ModalRow,
  ModalLabel,
  ModalValue,
  CategoryChip,
  FavoriteButtonWrapper,
  InfoBlock,
  InfoLine,
  Label,
  VariationsContainer
} from './styles';


interface Props {
  product: Product;
  onClose: () => void;
}

export const ProductModal: React.FC<Props> = ({ product, onClose }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state: RootState) => state.favorites.favorites);
  const isFavorite = favorites.some(p => p.id === product.id);

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(product.id));
    } else {
      dispatch(addFavorite(product));
    }

    dispatch(updateFavoriteStatus({ id: product.id, isFavorite: !isFavorite }));
  };

  return (
    <>
      <ModalOverlay onClick={onClose} />
      <ModalContent>
        {product.imagem && (
          <ModalImage src={product.imagem} alt={product.nome} />
        )}

        <ModalHeader>
          <ModalTitle>{product.nome}</ModalTitle>
          <FavoriteButtonWrapper>
            <FavoriteButton $favorite={isFavorite} onClick={toggleFavorite} />
          </FavoriteButtonWrapper>
        </ModalHeader>

        <ModalBody>
          <ModalSection>
            <ModalRow>
              <ModalLabel>Preço:</ModalLabel>
              <ModalValue>
                {product.preco?.includes('Preço não disponível')
                  ? product.preco
                  : `R$ ${product.preco}`}
              </ModalValue>
            </ModalRow>

            <ModalRow>
              <ModalLabel>Descrição:</ModalLabel>
              <ModalValue>{product.descricao}</ModalValue>
            </ModalRow>

            {product.categorias.length > 0 && (
              <ModalRow>
                <ModalLabel>Categorias:</ModalLabel>
                <ModalValue>
                  {product.categorias.map(id => (
                    <CategoryChip key={id}>{getCategoryName(id)}</CategoryChip>
                  ))}
                </ModalValue>
              </ModalRow>
            )}

            {product.variacao && product.variacao.length > 0 && (
              <ModalRow>
                <ModalLabel>Variações:</ModalLabel>
                <VariationsContainer>
                  {product.variacao.map((v, i) => (
                    <InfoBlock key={i}>
                      <InfoLine><Label>Vendedor:</Label> {v.vendedor}</InfoLine>
                      <InfoLine><Label>Fabricante:</Label> {v.fabricante}</InfoLine>
                      <InfoLine><Label>Estoque:</Label> {v.estoque}</InfoLine>
                      <InfoLine><Label>Cor:</Label> {v.cor}</InfoLine>
                      <InfoLine><Label>Voltagem:</Label> {v.voltagem}</InfoLine>
                      <InfoLine><Label>Tamanho:</Label> {v.tamanho}</InfoLine>
                      <InfoLine><Label>Garantia:</Label> {v.garantia}</InfoLine>
                      <InfoLine><Label>Peso:</Label> {v.peso}</InfoLine>
                      <InfoLine><Label>Dimensões:</Label> {v.dimensoes ?? 'Não informado'}</InfoLine>
                    </InfoBlock>
                  ))}
                </VariationsContainer>
              </ModalRow>
            )}
          </ModalSection>
        </ModalBody>
        <ModalClose onClick={onClose}>Fechar</ModalClose>
      </ModalContent>
    </>
  );
};
