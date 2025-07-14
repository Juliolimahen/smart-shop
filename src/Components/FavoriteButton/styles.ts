import styled from 'styled-components';

interface FavoriteButtonProps {
  $favorite: boolean;
  onClick: (e: React.MouseEvent) => void;
  className?: string;
}

export const StyledButton = styled.button<FavoriteButtonProps>`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.4rem;
  color: ${({ $favorite }) => ($favorite ? '#f5c518' : '#ccc')};
  transition: color 0.3s ease;
  padding: 5px;
  display: flex;

  &:hover {
    color: ${({ $favorite }) => ($favorite ? '#f1b700' : '#999')};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.4);
  }
`;