import { useState } from "react";
import Counter from "./components/Counter";

function App() {
  const [count, setCount] = useState(0);
  const [playerName, setPlayerName] = useState("");

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Badminton Score Tracker 🏸</h1>

      <input
        type="text"
        placeholder="Enter player name"
        value={playerName}
        onChange={(e) => setPlayerName(e.target.value)}
      />

      <h2>Player: {playerName}</h2>

      <Counter title="Match Counter" count={count} setCount={setCount} />
    </div>
  );
}

export default App;