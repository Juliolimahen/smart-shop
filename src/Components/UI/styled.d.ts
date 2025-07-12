import "styled-components";
import { Tema } from "./temas";

declare module "styled-components" {
  export interface DefaultTheme extends Tema {}
}
