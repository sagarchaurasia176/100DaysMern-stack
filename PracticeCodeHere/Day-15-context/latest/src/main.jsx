import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ContextStates } from './context/ContextStates.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextStates>
    <App />
    </ContextStates>
  </React.StrictMode>,
)
