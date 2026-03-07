function Counter({ title, count, setCount }) {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>{title}</h2>
      <h3>Count: {count}</h3>

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

export default Counter;