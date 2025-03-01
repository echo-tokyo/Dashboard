import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/reset.scss'
import './assets/global.scss'
import Router from './Router.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router />
  </StrictMode>,
)
