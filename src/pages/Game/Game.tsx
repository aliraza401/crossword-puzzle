import React from "react";
import Crossword from "@jaredreisinger/react-crossword";

import { GameProps } from "./Game.interface";
import {} from "./Game.styled";

import { useCrosswordData } from "../../context/crosswordDataContext";
import { Spin } from "antd";
import { Header } from "../../components/Header/Header";

export const Game: React.FC<GameProps> = () => {
  const [crosswordData] = useCrosswordData();

  if (!crosswordData) return <Spin />;

  return (
    <>
      <Header name="Game" />
      <Crossword data={crosswordData} />
    </>
  );
};
