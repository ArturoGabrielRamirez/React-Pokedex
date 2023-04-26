import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { MyRouterProvider } from './providers/MyRouterProvider'
import { MantineProvider } from '@mantine/core';






ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <MyRouterProvider />
    </MantineProvider>
  </React.StrictMode>,
)
