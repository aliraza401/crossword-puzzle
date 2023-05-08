import { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import { ROUTES, data } from "./utils/constants";
import customTheme from "./theme/theme";
import GlobalStyle from "./theme/globalStyle";
import Home from "./pages/Home/Home";
import { Game } from "./pages/Game/Game";
import { useCrosswordData } from "./context/crosswordDataContext";
import { Create } from "./pages/Create/Create";

const App = () => {
  const [crosswordData, dispatchCrosswordData] = useCrosswordData();

  useEffect(() => {
    dispatchCrosswordData({ type: "SET_CROSSWORD_DATA", payload: data });
  }, []);

  return (
    <ThemeProvider theme={customTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.GAME} element={<Game />} />
          <Route path={ROUTES.CREATE_CORSSWORD} element={<Create />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
