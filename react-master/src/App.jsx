import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  let backgroundColor = "#e2abe4";

if (count === 0) {
  backgroundColor = "#f1abb1"; // red
} else if (count >= 3 && count <= 5) {
  backgroundColor = "#deca87"; // yellow
} else if (count > 5) {
  backgroundColor = "#bbeec7"; // green
}

  return (
    <div
    style={{
    textAlign: "center",
    marginTop: "50px",
    backgroundColor: backgroundColor,
    minHeight: "100vh",
    paddingTop: "50px"
    }}
    >
      <h1>My First React App 🚀</h1>
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>

      <button 
        onClick={() => setCount(prev => prev > 0 ? prev - 1 : 0)}
        disabled={count === 0}
      >
        Decrease
      </button>

      <button onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}

export default App;