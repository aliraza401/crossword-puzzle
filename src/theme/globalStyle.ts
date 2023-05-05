import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }
  #root {
    max-width: 450px;
    margin: 0 auto;
    height: 100vh;
  }
  .cursor-pointer {
    cursor: pointer;
  }

  .pointer-disabled {
    pointer-events: none;
    opacity: 0.7;
  }


`;

export default GlobalStyle;
