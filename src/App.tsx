import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { temaClaro, temaEscuro } from './Components/UI/temas';
import Cabecalho from './Components/Cabecalho';
import Container from './Components/Container';
import { GlobalStyle } from './Components/GloblaStyle';
import { BtnTema } from './Components/UI';
import SwitcherTema from './SwitcherTema';
import useTema from './hooks/useTema';

const App: React.FC = () => {
  const { tema, alternarTema } = useTema();

  return (
    <BrowserRouter>
      <ThemeProvider theme={tema ? temaClaro : temaEscuro}>
        <GlobalStyle />
        <BtnTema onClick={alternarTema}>
          <SwitcherTema tema={tema} />
        </BtnTema>
        <Cabecalho />
        <Container />
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
