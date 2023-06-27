import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import GlobalStyles from './styles/global'
import { AuthProvider } from './hooks/auth'
import {Details} from './pages/Details'
import {Home} from './pages/Home'
import {Profile} from './pages/Profile'
import {New} from './pages/New'
import {SignIn} from './pages/SignIn'
import {SignUp} from './pages/SignUp'
import { Routes } from './routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
        <AuthProvider>
          <Routes />
        </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
