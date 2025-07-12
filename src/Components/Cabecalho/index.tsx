import React from "react";
import smart_logo from "../../assets/images/smart_logo.svg";
import styled from "styled-components";
import { corPrimaria } from "../UI/variaveis";

interface BtnCabecalhoProps {
  primary?: boolean;
}

const BtnCabecalho = styled.a<BtnCabecalhoProps>`
  text-align: center;
  border-radius: 3px;
  padding: 5px 20px;
  margin: 0 10px;
  font-weight: 600;
  border: 2px solid white;
  background: ${({ primary }) => (primary ? "white" : corPrimaria)};
  color: ${({ primary }) => (primary ? corPrimaria : "white")};
`;

const StyledHeader = styled.nav`
  background-color: ${corPrimaria};
  display: flex;
  justify-content: space-between;
  padding: 0 15vw;
  height: 10vh;
  align-items: center;
`;

const Logo = styled.img`
  height: 50px;
  width: 50px;
`;

const Cabecalho: React.FC = () => {
  return (
    <StyledHeader>
      <Logo src={smart_logo} alt="Logo Smart Shop" />
      <div>
        {/* <BtnCabecalho primary href="https://google.com">
          Ajuda
        </BtnCabecalho>
        <BtnCabecalho href="https://google.com">
          Sair
        </BtnCabecalho> */}
      </div>
    </StyledHeader>
  );
};

export default Cabecalho;
