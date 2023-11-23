import { useState } from "react";

import GameBoard from "./components/gameBoard/GameBoard";
import Player from "./components/player/Player";
import Log from "./components/log/Log";
import deriveActivePlayer from "./utils/deriveActivePlayer";

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const activePlayer = deriveActivePlayer(gameTurns);
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
        <GameBoard gameTurns={gameTurns} onSelectCell={handleSelectCell} />
      </div>

      <Log gameTurns={gameTurns} />
    </main>
  );
}

export default App;
