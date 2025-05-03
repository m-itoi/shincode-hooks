// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  // StrictModeを使うと開発環境ではuseEffectが2回発火する。
  // これを利用して、useEffectの副作用が2回発火しても問題ないか確認できる。
  // 本番環境では1回しか発火しない。
  // 参考: https://ja.reactjs.org/docs/strict-mode.html#detecting-unexpected-side-effects
  // <StrictMode>
    <App />
  // </StrictMode>
)
