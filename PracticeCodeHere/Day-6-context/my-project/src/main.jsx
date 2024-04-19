import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { States } from './Context/States.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <States>
    <App />
    </States>
  </React.StrictMode>,
)
