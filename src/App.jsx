import Player from "./components/Player/Player";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player name="Andrius" symbol="O" />
          <Player name="Tom" />
        </ol>
        GAME BOARD
      </div>
      LOG
    </main>
  );
}

export default App;
