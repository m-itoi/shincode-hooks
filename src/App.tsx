import './App.css'


function App() {
  let count = 0;

  const handleClick = () => {
    count++;
    console.log(count);
  };

  return (
    <div className="App">
      <h1>useState</h1>
      <p>Count: {count}</p>
      {/* countは実際増えているが画面には反映されない */}
      <button onClick={handleClick}>＋</button>
    </div>
  );
};

export default App;
