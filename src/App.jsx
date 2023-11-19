import GameBoard from "./components/GameBoard/GameBoard";
import Player from "./components/Player/Player";

function App() {
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
