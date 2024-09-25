import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(1000000000);

  function increment() {
    setCount(count + 1);
    setNumber(1000000000 + count + 1);
  }
  return (
    <div>
      <span>Count: {count}</span>
      <button
        onClick={() => {
          increment();
        }}
      >
        +
      </button>
      <h1>Expensive Calculation</h1>
      <p>{number}</p>
      <hr />
      <hr />
    </div>
  );
};

export default Counter;
