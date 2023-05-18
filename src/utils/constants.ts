import { CrosswordData } from "../pages/Game/Game.interface";

export const ROUTES = {
  HOME: "/",
  CREATE_CORSSWORD: "/create",
  GAME: "/game",
};

import Crossword, { useIpuz } from "@jaredreisinger/react-crossword";

export const dataLvl1: CrosswordData = {
  across: {
    1: {
      clue: "one plus one",
      answer: "TWO",
      row: 0,
      col: 0,
    },
    2: {
      clue: "Opposite of lose",
      answer: "WIN",
      row: 1,
      col: 0,
    },
  },
  down: {
    1: {
      clue: "three minus two",
      answer: "ONE",
      row: 0,
      col: 2,
    },
    // 2: {
    //   clue: "Opposite of out",
    //   answer: "IN",
    //   row: 1,
    //   col: 1,
    // },
  },
};
