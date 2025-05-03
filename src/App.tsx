import './App.css'
import {
  useEffect,
  useState,
  useContext
} from 'react';
import MakotoContext from './main.tsx';

function App() {
  const [count, setCount] = useState(0);
  const makotoInfo = useContext(MakotoContext);

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
      <p>名前：{makotoInfo.name}</p>
      <p>年齢：{makotoInfo.age}</p>
    </div>
  );
};

export default App;
