import './App.css'
import {
  useEffect,
  useState,
  useContext,
  // Reference：参照
  // 指定したHTMLタグの情報を参照する。
  useRef,
} from 'react';
import MakotoContext from './main.tsx';

function App() {
  const [count, setCount] = useState(0);
  const ref = useRef("");
  const makotoInfo = useContext(MakotoContext);

  const handleClick = () => {
    setCount(count + 1);
  };

  const handleRef = () => {
    console.log(ref);
    console.log(ref.current.value);
    console.log(ref.current.clientWidth);
  }

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

      <hr />
      <h1>useRef</h1>
      <input type="text" ref={ref} />
      <button onClick={handleRef}>useRef</button>
    </div>
  );
};

export default App;
