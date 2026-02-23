import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  
  const backgroundColor = count > 5 ? "#b8edc4" : "#b26b6b";

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