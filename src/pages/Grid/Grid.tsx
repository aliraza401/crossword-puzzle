import React, { useEffect, useState } from "react";
import { GridContainer, GridRow, GridCell } from "./Grid.styled";
import { Cell } from "./Grid.interface";

const Grid: React.FC = () => {
  const gridSize = 7;

  const emptyCell: Cell = { letter: null, number: null, clue: null };
  const initialGrid: Cell[][] = Array.from({ length: gridSize }, () =>
    Array.from({ length: gridSize }, () => emptyCell)
  );

  const [activeCell, setActiveCell] = useState<{
    row: number;
    col: number;
  } | null>(null);

  const handleCellClick = (row: number, col: number) =>
    setActiveCell({ row, col });

  const [grid, setGrid] = useState(initialGrid);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!activeCell || !/^[A-Z]$/.test(e.key.toUpperCase())) return;

      const newGrid = grid.map((row) => row.map((cell) => ({ ...cell })));

      newGrid[activeCell.row][activeCell.col].letter = e.key.toUpperCase();
      setGrid(newGrid);

      setActiveCell(null);
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [grid, activeCell]);

  return (
    <GridContainer>
      {Array.from({ length: gridSize }, (_, rowIndex) => (
        <GridRow key={rowIndex}>
          {Array.from({ length: gridSize }, (_, cellIndex) => {
            const cell = grid[rowIndex][cellIndex];
            return (
              <GridCell
                key={cellIndex}
                onClick={() => handleCellClick(rowIndex, cellIndex)}
              >
                {cell.number && (
                  <div className="cell-number">{cell.number}</div>
                )}
                {cell.letter && (
                  <div className="cell-letter">{cell.letter}</div>
                )}
              </GridCell>
            );
          })}
        </GridRow>
      ))}
    </GridContainer>
  );
};

export default Grid;
