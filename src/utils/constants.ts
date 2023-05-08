import { CrosswordData } from "../pages/Game/Game.interface";

export const ROUTES = {
  HOME: "/",
  CREATE_CORSSWORD: "/create",
  GAME: "/game",
};

export const data: CrosswordData = {
  across: {
    1: {
      clue: "one plus one",
      answer: "TWO",
      row: 0,
      col: 0,
    },
  },
  down: {
    2: {
      clue: "three minus two",
      answer: "ONE",
      row: 0,
      col: 2,
    },
  },
};
