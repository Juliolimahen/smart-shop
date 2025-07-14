import React from "react";
import ThemeOn from "./assets/images/themeOn.svg";
import ThemeOff from "./assets/images/themeOff.svg";
import { Icone } from "./Components/UI";

interface TemaIconeProps {
  tema: boolean;
}

const TemaIcone: React.FC<TemaIconeProps> = ({ tema }) => {
  return tema ? <Icone src={ThemeOff} alt="Tema Escuro" /> : <Icone src={ThemeOn} alt="Tema Claro" />;
};

export default TemaIcone;
