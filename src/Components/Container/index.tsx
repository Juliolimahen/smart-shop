import styled from "styled-components";
import Titulo from "../Titulo";

const Container = styled.div`
  background-color: ${({ theme }) => theme.body};
  min-height: 90vh;
  padding: 0px 15vw;  
`
const Conteudo = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: ${({ theme }) => theme.text};
  @media (max-width: 800px) {
      flex-direction: column;
  }
`
export default () => {
  return (
    <Container><Titulo>Olá Fulano!</Titulo>
      <Conteudo>
        <p>Bem-vindo à Smart Shop, a sua loja de tecnologia Explore nossos produtos e aproveite as melhores ofertas. Explore nossos produtos e aproveite as melhores ofertas!</p>
        <p>Explore nossos produtos e aproveite as melhores ofertas.</p>
      </Conteudo>
    </Container>
  );
};
