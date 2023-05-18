import React, { useRef } from "react";
import { Spin, message } from "antd";

import { GameProps } from "./Game.interface";
import { StyledCrossword, StyledButton } from "./Game.styled";
import { crosswordTheme } from "../../theme/theme";

export const Game: React.FC<GameProps> = ({ crosswordData }) => {
  if (!crosswordData) return <Spin />;

  const gameRef = useRef<any>();

  const onComplete = (isCompleted: boolean) => {
    if (!isCompleted) return;
    message.success("Puzzle Completed Success");
  };

  const handleReset = () => gameRef.current.reset();

  const fillAllAnswers = () => gameRef.current.fillAllAnswers();

  return (
    <>
      <StyledCrossword
        data={crosswordData}
        useStorage={true}
        ref={gameRef}
        onCorrect={(e) => console.log(e)}
        onCrosswordCorrect={onComplete}
        theme={crosswordTheme}
      />
      <StyledButton type="primary" onClick={handleReset}>
        Reset
      </StyledButton>
      <StyledButton type="primary" onClick={fillAllAnswers}>
        Fill All
      </StyledButton>
    </>
  );
};
