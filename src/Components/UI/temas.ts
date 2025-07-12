export const corPrimaria = "#41d3be";

export const fundoClaro = "#f1f1f1";
export const conteudoClaro = "white";
export const textoFundoClaro = "grey";

export const fundoEscuro = "#363537";
export const conteudoEscuro = "#5c5b5e";
export const textoFundoEscuro = "#FAFAFA";

export interface Tema {
  body: string;
  inside: string;
  text: string;
  filter: string;
}

export const temaClaro: Tema = {
  body: fundoClaro,
  inside: conteudoClaro,
  text: textoFundoClaro,
  filter: "",
};

export const temaEscuro: Tema = {
  body: fundoEscuro,
  inside: conteudoEscuro,
  text: textoFundoEscuro,
  filter: "invert(100%)",
};
