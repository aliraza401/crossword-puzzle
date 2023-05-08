import React, { useRef } from "react";
import Crossword, {
  CrosswordProviderImperative,
} from "@jaredreisinger/react-crossword";

import { GameProps } from "./Game.interface";
import {} from "./Game.styled";

import { useCrosswordData } from "../../context/crosswordDataContext";
import { Spin, message } from "antd";
import { Header } from "../../components/Header/Header";

export const Game: React.FC<GameProps> = () => {
  const [crosswordData] = useCrosswordData();
  const gameRef = useRef<any>();

  const onComplete = () => {
    message.success("Puzzle Completed Success");
    gameRef.current.reset();
  };

  if (!crosswordData) return <Spin />;

  return (
    <>
      <Header name="Game" />
      <Crossword
        data={crosswordData}
        useStorage={false}
        ref={gameRef}
        onCorrect={(e) => console.log(e)}
        onCrosswordCorrect={onComplete}
      />
    </>
  );
};
