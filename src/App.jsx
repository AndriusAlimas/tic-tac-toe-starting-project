import { useState } from "react";

import GameBoard from "./components/gameBoard/GameBoard";
import Player from "./components/player/Player";
import Log from "./components/log/Log";
import deriveActivePlayer from "./utils/deriveActivePlayer";
import { WINNING_COMBINATIONS } from "./utils/winning-combinations";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const activePlayer = deriveActivePlayer(gameTurns);

  let gameBoard = initialGameBoard;

  for (const gameTurn of gameTurns) {
    const { cell, player } = gameTurn;
    const { row, column } = cell;

    gameBoard[row][column] = player;
  }

  let winner;

  for (const combination of WINNING_COMBINATIONS) {
    const firstCellSymbol =
      gameBoard[combination[0].row][combination[0].column];
    const secondCellSymbol =
      gameBoard[combination[1].row][combination[1].column];
    const thirdCellSymbol =
      gameBoard[combination[2].row][combination[2].column];
    if (
      firstCellSymbol &&
      firstCellSymbol === secondCellSymbol &&
      firstCellSymbol === thirdCellSymbol
    ) {
      winner = firstCellSymbol;
    }
  }
  const handleSelectCell = (rowIndex, colIndex) => {
    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);

      const updatedTurns = [
        {
          cell: {
            row: rowIndex,
            column: colIndex,
          },
          player: currentPlayer,
        },
        ...prevTurns,
      ];

      return updatedTurns;
    });
  };
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="Andrius" symbol="X" isActive={activePlayer === "X"} />
          <Player name="Tom" symbol="O" isActive={activePlayer === "O"} />
        </ol>
        <GameBoard boardGame={gameBoard} onSelectCell={handleSelectCell} />
      </div>
      {winner && <p>You won, {winner} !</p>}
      <Log gameTurns={gameTurns} />
    </main>
  );
}

export default App;
