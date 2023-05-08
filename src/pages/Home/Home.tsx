import React from "react";
import { HomeProps } from "./Home.interface";
import {
  HomeContainer,
  HomeTitle,
  HomeButton,
  ButtonGroup,
} from "./Home.styled";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../utils/constants";

const Home: React.FC<HomeProps> = ({}) => {
  const navigate = useNavigate();

  return (
    <HomeContainer>
      <HomeTitle>Welcome to Crossword Puzzle Game</HomeTitle>
      <ButtonGroup>
        <HomeButton
          type="primary"
          onClick={() => navigate(ROUTES.CREATE_CORSSWORD)}
        >
          Create New Puzzle
        </HomeButton>
        <HomeButton type="primary" onClick={() => navigate(ROUTES.GAME)}>
          Play Game
        </HomeButton>
      </ButtonGroup>
    </HomeContainer>
  );
};

export default Home;
