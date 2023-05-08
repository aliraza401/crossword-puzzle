import React, { useState } from "react";
import { Button, message } from "antd";

import { GameProps } from "./Create.interface";
import {} from "./Create.styled";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../utils/constants";
import { useCrosswordData } from "../../context/crosswordDataContext";
import CrosswordInput from "../../components/CrosswordInput/CrosswordInput";
import { InputField } from "../../components/CrosswordInput/CrosswordInput.interface";
import { CrosswordData } from "../Game/Game.interface";

export const Create: React.FC<GameProps> = () => {
  const [acrossInputFields, setAcrossInputFields] = useState<InputField[]>([
    { clue: "", answer: "", row: "", col: "" },
  ]);
  const [downInputFields, setDownInputFields] = useState<InputField[]>([
    { clue: "", answer: "", row: "", col: "" },
  ]);
  const [, dispatchCrosswordData] = useCrosswordData();
  const navigate = useNavigate();

  const handleAddField = (direction: "Across" | "Down") => {
    const newField = { clue: "", answer: "", row: "", col: "" };
    if (direction === "Across") {
      setAcrossInputFields([...acrossInputFields, newField]);
    } else {
      setDownInputFields([...downInputFields, newField]);
    }
  };

  const handleInputChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>,
    direction: "Across" | "Down"
  ) => {
    const inputName = event.target.name as keyof InputField;
    if (["clue", "answer", "row", "col"].includes(inputName)) {
      if (direction === "Across") {
        const newAcrossInputFields = [...acrossInputFields];
        newAcrossInputFields[index][inputName] = event.target.value;
        setAcrossInputFields(newAcrossInputFields);
      } else {
        const newDownInputFields = [...downInputFields];
        newDownInputFields[index][inputName] = event.target.value;
        setDownInputFields(newDownInputFields);
      }
    }
  };

  const validateInputs = (inputFields: InputField[]): boolean => {
    for (const field of inputFields) {
      if (!field.clue || !field.answer || !field.row || !field.col) {
        message.error("Please fill in all input fields.");
        return false;
      }
    }
    return true;
  };

  const handleSubmit = () => {
    if (validateInputs(acrossInputFields) && validateInputs(downInputFields)) {
      const crosswordData: CrosswordData = {
        across: {},
        down: {},
      };

      acrossInputFields.forEach((field) => {
        const key = parseInt(field.row) * 100 + parseInt(field.col);
        crosswordData.across[key] = {
          clue: field.clue,
          answer: field.answer,
          row: parseInt(field.row),
          col: parseInt(field.col),
        };
      });

      downInputFields.forEach((field) => {
        const key = parseInt(field.row) * 100 + parseInt(field.col);
        crosswordData.down[key] = {
          clue: field.clue,
          answer: field.answer,
          row: parseInt(field.row),
          col: parseInt(field.col),
        };
      });

      dispatchCrosswordData({
        type: "SET_CROSSWORD_DATA",
        payload: crosswordData,
      });
      navigate(ROUTES.GAME);
      message.success("Crossword data submitted.");
    }
  };

  return (
    <>
      <CrosswordInput
        direction="Across"
        inputFields={acrossInputFields}
        onInputChange={handleInputChange}
        onAddField={handleAddField}
      />
      <CrosswordInput
        direction="Down"
        inputFields={downInputFields}
        onInputChange={handleInputChange}
        onAddField={handleAddField}
      />
      <Button
        type="primary"
        onClick={handleSubmit}
        style={{ marginTop: 10, width: "100%" }}
      >
        Submit
      </Button>
    </>
  );
};
