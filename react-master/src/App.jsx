import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  let backgroundColor = "#e2abe4";
  let textColor = "#000000";
  let marginTop = "50px";

if (count === 0) {
  backgroundColor = "#f1abb1"; // red
  textColor = "#14b441";
} else if (count >= 3 && count <= 5) {
  backgroundColor = "#deca87"; // yellow
  marginTop = "100px"
} else if (count > 5) {
  backgroundColor = "#bbeec7"; // green
  textColor = "#d21717";
  marginTop = "150px"
}

  return (
    <div
    style={{
    textAlign: "center",
    marginTop: marginTop,
    backgroundColor: backgroundColor,
    color: textColor,
    minHeight: "100vh",
    paddingTop: "50px",
    transition: "all 0.5s ease"
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