import React from 'react';
import smart_logo from '../../assets/images/smart_logo.svg';
import { StyledHeader, Logo, Navigation } from './styles';
import NavLinks from '../Navigation';

const Cabecalho: React.FC = () => {
  return (
    <StyledHeader>
      <Logo src={smart_logo} alt="Logo da Smart Shop" />
      <Navigation>
        <NavLinks />
      </Navigation>
    </StyledHeader>
  );
};

export default Cabecalho;
