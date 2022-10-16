import React from 'react'
import Menu from './components/Menu'
import GlobalStyle from './styles/global'
import light from './styles/themes/light'
import dark from './styles/themes/dark'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import usePersistedState from './hooks/usePersistedState'
import { Route, Routes, Navigate } from 'react-router-dom'
import DragonList from './pages/DragonsList'
import DragonItem from './pages/DragonItem'
import NotFound from './pages/NotFound'
import { ReactQueryProvider } from './ui/providers/ReactQueryProvider'
import Login from './pages/Login'

// @ts-ignore
const PrivateRoute = ({ children, redirectTo }) => {
  const isAuthenticated = localStorage.getItem('token') !== null
  return isAuthenticated ? children : <Navigate to={redirectTo} />
}

const App = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light)
  const toggledTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (
    <ReactQueryProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Menu toggledTheme={toggledTheme} />
        <Routes>
          <Route
            path="/dragons"
            index
            element={
              <PrivateRoute redirectTo="/">
                <DragonList />
              </PrivateRoute>
            }
          />
          <Route
            path="dragons/:id"
            element={
              <PrivateRoute redirectTo={'/'}>
                <DragonItem />
              </PrivateRoute>
            }
          />
          <Route path="/" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ThemeProvider>
    </ReactQueryProvider>
  )
}

export default App
