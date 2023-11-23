import "./log.css";
export default function Log({ gameTurns }) {
  return (
    <ol id="log">
      {gameTurns.map((turn) => (
        <li key={`${turn.cell.row}${turn.cell.column}`}>
          {`${turn.player} selected ${turn.cell.row},${turn.cell.column}`}
        </li>
      ))}
    </ol>
  );
}
