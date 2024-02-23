import { createGlobalStyle } from "styled-components";
import "sanitize.css";
import { ThemeName } from "./theme";

interface Props {
  themeName: ThemeName;
}

const GlobalStyle = createGlobalStyle<Props>`
   body {
      padding: 0;
      margin: 0;
      background-color: ${(props) =>
        props.themeName === "light" ? "white" : "black"}
    }

    h1 {
      margin: 0;
    }

    button {
      border: 2px solid ${(props) =>
        props.themeName === "light" ? "black" : "white"};
    }

    * {
      color: ${(props) => (props.themeName === "light" ? "black" : "white")}
    }
`;

export default GlobalStyle;
