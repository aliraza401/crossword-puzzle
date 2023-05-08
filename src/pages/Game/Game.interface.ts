interface ClueData {
  clue: string;
  answer: string;
  row: number;
  col: number;
}

type DirectionData = Record<string, ClueData>;

export interface CrosswordData {
  across: DirectionData;
  down: DirectionData;
}

export interface GameProps {
  //   CrosswordData: CrosswordData;
}
