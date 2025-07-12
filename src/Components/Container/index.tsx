import styled from "styled-components";
import Titulo from "../Titulo";
import Home from "../../pages/Home";
import Favorites from "../../pages/Favorites";
import Footer from "../Footer";

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
    <>
      <Container><Titulo>Olá Fulano!</Titulo>
        <Conteudo>
          <Home />
          <Favorites />
        </Conteudo>
      </Container>
      <Footer />
    </>
  );
};
