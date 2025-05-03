import './App.css'
import { useState } from 'react';

function App() {
  // let count = 0;
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
    console.log(count); // ↓
    // クイズ：初回クリック後にconsole出力される値は？
    // こたえ：1回目のクリック時は0。（2回目のクリック時は1、3回目のクリック時は2）
    // クリック"した時"のcountの値になる。setCount後の値は反映されない。
    // setCountは非同期処理なので、すぐに反映されないから。
    // レンダリング後に反映される。
  };

  return (
    <div className="App">
      <h1>useState</h1>
      <p>Count: {count}</p>
      {/* countは実際増えているが画面には反映されない */}
      {/* setCountを使うと反映される。useStateを使うとレンダリングされるから。 */}
      <button onClick={handleClick}>＋</button>
    </div>
  );
};

export default App;
