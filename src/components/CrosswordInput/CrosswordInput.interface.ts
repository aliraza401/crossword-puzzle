export interface InputField {
  clue: string;
  answer: string;
  row: string;
  col: string;
}

export interface CrosswordInputProps {
  direction: "Across" | "Down";
  inputFields: InputField[];
  onInputChange: (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>,
    direction: "Across" | "Down"
  ) => void;
  onAddField: (direction: "Across" | "Down") => void;
}
