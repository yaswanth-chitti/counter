import React, { useState } from 'react';

function App() {
  // Counter state
  const [count, setCount] = useState(0);

  // Calculator states
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [result, setResult] = useState('');

  return (
    <div>
      <h1>Counter Application</h1>

      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(0)}>Reset</button>

      <hr />

      <h1>Calculator</h1>

      <input
        type="number"
        placeholder="Enter first number"
        value={a}
        onChange={(e) => setA(e.target.value)}
      />

      <input
        type="number"
        placeholder="Enter second number"
        value={b}
        onChange={(e) => setB(e.target.value)}
      />

      <br /><br />

      <button onClick={() => setResult(Number(a) + Number(b))}>+</button>

      <button onClick={() => setResult(Number(a) - Number(b))}>-</button>

      <button onClick={() => setResult(Number(a) * Number(b))}>*</button>

      <button onClick={() => setResult(Number(a) / Number(b))}>/</button>

      <h2>Result: {result}</h2>
    </div>
  );
}

export default App;