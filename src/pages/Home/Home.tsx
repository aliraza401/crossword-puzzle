import React, { useState } from "react";
import { Button, Modal } from "antd";
import {
  Container,
  GridContainer,
  CluesContainer,
  ButtonsContainer,
} from "./Home.styled";
import { Clue } from "./Home.interface";
import Grid from "./../Grid/Grid";

export const Home: React.FC = () => {
  const [isHintsModalVisible, setIsHintsModalVisible] = useState(false);

  const acrossClues: Clue[] = [
    {
      number: 1,
      text: "A small green vegetable that comes in pods.",
    },
    {
      number: 2,
      text: "The sheltered side away from the wind.",
    },
  ];
  const downClues: Clue[] = [
    {
      number: 1,
      text: "An ___ a day keeps the doctor away.",
    },
  ];

  const hints = [
    "An ___ a day keeps the doctor away.", // APPLE
    "A small green vegetable that comes in pods.", // PEA
    "The sheltered side away from the wind.", // LEE
  ];
 
  const showHintsModal = () => setIsHintsModalVisible(true);
  const handleHintsModalCancel = () => setIsHintsModalVisible(false);

  return (
    <Container>
      <h3>Crossword Puzzle</h3>
      <GridContainer>
        <Grid />
      </GridContainer>
      <CluesContainer>
        <div>
          <h3>Across</h3>
          <ul>
            {acrossClues.map((clue) => (
              <li key={clue.number}>{`${clue.number}. ${clue.text}`}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Down</h3>
          <ul>
            {downClues.map((clue) => (
              <li key={clue.number}>{`${clue.number}. ${clue.text}`}</li>
            ))}
          </ul>
        </div>
      </CluesContainer>
      <ButtonsContainer>
        <Button type="primary" onClick={showHintsModal}>
          Show Hints
        </Button>
      </ButtonsContainer>
      <Modal
        title="Hints"
        open={isHintsModalVisible}
        onCancel={handleHintsModalCancel}
        footer={<></>}
      >
        <ul>
          {hints.map((hint, index) => (
            <li key={index}>{hint}</li>
          ))}
        </ul>
      </Modal>
    </Container>
  );
};
