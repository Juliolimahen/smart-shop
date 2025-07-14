import styled from 'styled-components';
import { corPrimaria } from '../UI/variaveis';

export const StyledHeader = styled.nav`
  background-color: ${corPrimaria};
  display: flex;
  justify-content: space-between;
  padding: 0 15vw;
  height: 10vh;
  align-items: center;
`;

export const Logo = styled.img`
  height: 70px;
  width: 70px;
`;

export const Navigation = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

