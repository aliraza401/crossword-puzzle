import { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import { ROUTES, dataLvl1 } from "./utils/constants";
import customTheme from "./theme/theme";
import GlobalStyle from "./theme/globalStyle";
import { Game } from "./pages/Game/Game";

const App = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <GlobalStyle />
      <Game crosswordData={dataLvl1} />
    </ThemeProvider>
  );
};

export default App;
