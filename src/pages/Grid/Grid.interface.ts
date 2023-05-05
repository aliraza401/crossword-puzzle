export interface Cell {
  letter: string | null;
  number: number | null;
  clue: Clue | null;
}

export interface Clue {
  number: number;
  direction: "across" | "down";
  text: string;
}
