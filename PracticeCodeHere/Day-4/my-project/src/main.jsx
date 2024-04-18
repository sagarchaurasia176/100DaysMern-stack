import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { AllStates } from './context/AllStates.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AllStates>
    <App />

    </AllStates>
  </React.StrictMode>,
)
