import styled from "styled-components";
import Crossword from "@jaredreisinger/react-crossword";

import { Button } from "antd";

export const StyledCrossword = styled(Crossword)`
  background-color: #f5f5f5;

  .crossword-board-row-cell {
    background-color: #fff8dc;
    border: 1px solid #bdb76b;
  }
`;

export const StyledButton = styled(Button)`
  width: 100%;
  margin-top: 10px;
`;
