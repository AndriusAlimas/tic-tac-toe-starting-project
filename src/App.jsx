import { useState } from "react";

import GameBoard from "./components/gameBoard/GameBoard";
import Player from "./components/player/Player";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");

  const handleSelectCell = () => {
    setActivePlayer((activePlayer) => (activePlayer === "X" ? "O" : "X"));
  };
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="Andrius" symbol="X" isActive={activePlayer === "X"} />
          <Player name="Tom" symbol="O" isActive={activePlayer === "O"} />
        </ol>
        <GameBoard
          playerSymbol={activePlayer}
          onSelectCell={handleSelectCell}
        />
      </div>
      LOG
    </main>
  );
}

export default App;
