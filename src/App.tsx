import React from "react";

import { ThemeProvider } from "styled-components";
import theme from "./theme/theme";

import GlobalStyle from "./theme/globalStyle";
import { Home } from "./pages/Home/Home";

function App() {
  return (
    <>
      <ThemeProvider theme={{ ...theme }}>
        <GlobalStyle />
        <Home />
      </ThemeProvider>
    </>
  );
}

export default App;
