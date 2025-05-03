import './App.css'
import { useEffect, useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.count('useEffect発火');
  }, [count]);

  return (
    <div className="App">
      <h1>useState, useEffect</h1>
      <p>Count: {count}</p>
      <button onClick={handleClick}>＋</button>

      <hr />
      <h1>useContext</h1>
    </div>
  );
};

export default App;
