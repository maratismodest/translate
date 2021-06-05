import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './provider/AuthProvider'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
      <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
