import "./firebase"
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { MyRouterProvider } from './providers/MyRouterProvider'
import { MantineProvider } from '@mantine/core';
import LoginProvider from "./providers/LoginProvider"







ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LoginProvider>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <MyRouterProvider />
      </MantineProvider>
    </LoginProvider>
  </React.StrictMode>,
)
