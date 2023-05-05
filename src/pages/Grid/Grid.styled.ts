import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(7, auto);
  grid-gap: 2px;
  background-color: #000;
`;

export const GridRow = styled.div`
  display: grid;
  grid-template-columns: repeat(7, auto);
`;

export const GridCell = styled.div`
  width: 40px;
  height: 40px;
  background-color: #fff;
  border: 1px solid #000;

  position: relative;

  .cell-number {
    position: absolute;
    top: 0;
    left: 0;
  }

  .cell-letter {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
