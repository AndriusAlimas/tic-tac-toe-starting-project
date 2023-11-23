import { useState } from "react";

import GameBoard from "./components/gameBoard/GameBoard";
import Player from "./components/player/Player";
import Log from "./components/log/log";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");
  const [gameTurns, setGameTurns] = useState([]);

  const handleSelectCell = (rowIndex, colIndex) => {
    setActivePlayer((activePlayer) => (activePlayer === "X" ? "O" : "X"));
    setGameTurns((prevTurns) => {
      let currentPlayer = "X";
      if (prevTurns.length > 0 && prevTurns[0].player === "X") {
        currentPlayer = "O";
      }
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
        <GameBoard gameTurns={gameTurns} onSelectCell={handleSelectCell} />
      </div>
      <Log />
    </main>
  );
}

export default App;
