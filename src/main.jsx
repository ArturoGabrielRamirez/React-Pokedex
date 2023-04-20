import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { MyRouterProvider } from './providers/MyRouterProvider'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyRouterProvider />
  </React.StrictMode>,
)
