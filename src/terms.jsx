import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Terms from './components/Terms'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Terms />
  </StrictMode>
)
