import "./gameBoard.css";
const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelectCell, gameTurns }) {
  let gameBoard = initialGameBoard;

  for (const gameTurn of gameTurns) {
    const { cell, player } = gameTurn;
    const { row, column } = cell;

    gameBoard[row][column] = player;
  }

  // const [gameBoard, setGameBoard] = useState(initialGameBoard);

  // const handleClickCell = (rowIndex, columnIndex) => {
  //   setGameBoard((prevGameBoard) => {
  //     const updatedGameBoard = [
  //       ...prevGameBoard.map((innerArray) => [...innerArray]),
  //     ];
  //     updatedGameBoard[rowIndex][columnIndex] = playerSymbol;
  //     return updatedGameBoard;
  //   });
  //   onSelectCell();
  // };
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, columnIndex) => (
              <li key={columnIndex}>
                <button onClick={() => onSelectCell(rowIndex, columnIndex)}>
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
