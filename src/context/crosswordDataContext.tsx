import React, { createContext, useReducer, useContext } from "react";
import { CrosswordData } from "../pages/Game/Game.interface";

type CrosswordDataAction = {
  type: "SET_CROSSWORD_DATA";
  payload: CrosswordData;
};

const crosswordDataReducer = (
  state: CrosswordData | undefined,
  action: CrosswordDataAction
): CrosswordData | undefined => {
  switch (action.type) {
    case "SET_CROSSWORD_DATA":
      return action.payload;
    default:
      return state;
  }
};

const CrosswordDataContext = createContext<
  [CrosswordData | undefined, React.Dispatch<CrosswordDataAction>] | undefined
>(undefined);

interface CrosswordDataProviderProps {
  children: React.ReactNode;
}

export const CrosswordDataProvider: React.FC<CrosswordDataProviderProps> = ({ children }) => {
  const [crosswordData, dispatch] = useReducer(crosswordDataReducer, undefined);
  return (
    <CrosswordDataContext.Provider value={[crosswordData, dispatch]}>
      {children}
    </CrosswordDataContext.Provider>
  );
};

export const useCrosswordData = (): [
  CrosswordData | undefined,
  React.Dispatch<CrosswordDataAction>
] => {
  const context = useContext(CrosswordDataContext);
  if (!context) {
    throw new Error(
      "useCrosswordData must be used within a CrosswordDataProvider"
    );
  }
  return context;
};
