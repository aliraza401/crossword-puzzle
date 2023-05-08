import styled from "styled-components";
import { Button } from "antd";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const HomeTitle = styled.h1`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  color: #001529;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HomeButton = styled(Button)`
  margin: 1rem;
  width: 300px;
  border-radius: 8px;
  background-color: #1890ff;
  border-color: #1890ff;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.25);
  transition: all 0.3s;

  &:hover {
    background-color: #40a9ff;
    border-color: #40a9ff;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
  }
`;
