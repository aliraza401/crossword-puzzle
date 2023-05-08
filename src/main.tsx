import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CrosswordDataProvider } from "./context/crosswordDataContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <CrosswordDataProvider>
      <App />
    </CrosswordDataProvider>
  </React.StrictMode>
);
