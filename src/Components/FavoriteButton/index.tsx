import React from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';
import { StyledButton } from './styles';

interface FavoriteButtonProps {
  $favorite: boolean;
  onClick: (e: React.MouseEvent) => void;
  className?: string;
}

export const FavoriteButton: React.FC<FavoriteButtonProps> = ({
  $favorite,
  onClick,
  className
}) => {
  return (
    <StyledButton
      $favorite={$favorite}
      onClick={onClick}
      className={className}
      aria-label={$favorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
    >
      {$favorite ? <FaStar /> : <FaRegStar />}
    </StyledButton>
  );
};
