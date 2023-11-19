import { useState } from "react";
import "./Player.css";
export default function Player({ name, symbol = "X" }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  const handleEditClick = () => {
    setIsEditing((isEditing) => !isEditing);
  };

  const handleChange = (event) => {
    setPlayerName(event.target.value);
  };

  let playerNamePlaceHolder = <span className="player-name">{playerName}</span>;
  if (isEditing) {
    playerNamePlaceHolder = (
      <input type="text" value={playerName} onChange={handleChange} required />
    );
  }
  return (
    <li>
      <span className="player">
        {playerNamePlaceHolder}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
