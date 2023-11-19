import { useState } from "react";

export default function Player({ name, symbol = "X" }) {
  const [isEditing, setIsEditing] = useState(false);
  const handleEditClick = () => {
    setIsEditing((isEditing) => !isEditing);
  };

  let playerName = <span className="player-name">{name}</span>;
  if (isEditing) {
    playerName = <input type="text" value={name} required />;
  }
  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
