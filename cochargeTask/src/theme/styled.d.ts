import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    background: string;
    text: string;
    cardBackground: string;
    heartColor: string;
    shadow: string;
  }
}
