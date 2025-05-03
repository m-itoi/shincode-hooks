import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createContext } from 'react';

const makotoInfo = {
  name: 'Makoto',
  age: 34,
};

// コンテキストは頭文字大文字が一般的
const MakotoContext = createContext(makotoInfo);

createRoot(document.getElementById('root')!).render(
  <MakotoContext.Provider value={makotoInfo}>
    <StrictMode>
      <App />
    </StrictMode>
  </MakotoContext.Provider>
)

export default MakotoContext;
