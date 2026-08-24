import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Disclaimer from './components/Disclaimer'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Disclaimer />
  </StrictMode>
)
