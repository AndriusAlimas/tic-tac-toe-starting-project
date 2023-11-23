import { useState } from "react";
import "./player.css";

export default function Player({ name, isActive, symbol }) {
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
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {playerNamePlaceHolder}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
