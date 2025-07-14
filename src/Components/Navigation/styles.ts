import styled from 'styled-components';
import { corPrimaria } from '../UI/variaveis';

export const NavButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const FavoritesCount = styled.span`
  background-color: white;
  color: ${corPrimaria};
  border-radius: 50%;
  padding: 4px 8px;
  font-size: 0.75rem;
  font-weight: bold;
`;
