import { useState } from "react";
import "./gameBoard.css";
const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelectCell, playerSymbol }) {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  const handleClickCell = (rowIndex, columnIndex) => {
    setGameBoard((prevGameBoard) => {
      const updatedGameBoard = [
        ...prevGameBoard.map((innerArray) => [...innerArray]),
      ];
      updatedGameBoard[rowIndex][columnIndex] = playerSymbol;
      return updatedGameBoard;
    });
    onSelectCell();
  };
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, columnIndex) => (
              <li key={columnIndex}>
                <button onClick={() => handleClickCell(rowIndex, columnIndex)}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
