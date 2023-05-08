import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    background-color: black;
  }
  #root {
    background-color: #f0f2f5;
    max-width: 450px;
    padding-left: 10px;
    padding-right: 10px;
    margin: 0 auto;
    min-height: 100vh;
  }
`;

export default GlobalStyle;
