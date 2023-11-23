import { useState } from "react";

import GameBoard from "./components/gameBoard/GameBoard";
import Player from "./components/player/Player";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");

  const handleSelectCell = () => {
    setActivePlayer((currentActivePlayer) =>
      currentActivePlayer === "X" ? "O" : "X"
    );
  };
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player name="Andrius" symbol="O" />
          <Player name="Tom" />
        </ol>
        <GameBoard />
      </div>
      LOG
    </main>
  );
}

export default App;
