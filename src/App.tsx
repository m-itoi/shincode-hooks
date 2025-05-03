import './App.css'
import {
  useEffect,
  useState,
  useContext,
  useRef,
  useMemo, // ブラウザのメモリに保存する
} from 'react';
import MakotoContext from './main.tsx';

function App() {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const makotoInfo = useContext(MakotoContext);

  const handleClick = () => {
    setCount(count + 1);
  };

  const handleRef = () => {
    console.log(ref);
  }

  useEffect(() => {
    console.count('useEffect発火');
  }, [count]);

  // useMemo
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const square = () => {
    let i = 0;
    while (i < 1000000000) {
      i++;
    }
    return count2 * count2;
  };

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

      <hr />
      <h1>useMemo</h1>
      <div>カウント１：{count1}</div>
      <div>カウント２：{count2}</div>
      <div>square結果：{square()}</div>
      <button onClick={()=> setCount1(count1 +1)}>カウント１</button>
      <button onClick={()=> setCount2(count2 +1)}>カウント２</button>
    </div>
  );
};

export default App;
