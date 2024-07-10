import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { SurveyContextProvider } from './Context/SurveyContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SurveyContextProvider>
      <App />
    </SurveyContextProvider>
  </React.StrictMode>,
)
