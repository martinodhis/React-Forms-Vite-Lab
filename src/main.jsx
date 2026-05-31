import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'  // ← This should already exist
import App from './components/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)