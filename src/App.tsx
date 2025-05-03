import './App.css'
import { useEffect, useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log('Hello, world!');
  }, []); // コンポーネントのマウント時に1回だけ実行される。

  return (
    <div className="App">
      <h1>useState, useEffect</h1>
      <p>Count: {count}</p>
      <button onClick={handleClick}>＋</button>
    </div>
  );
};

export default App;
