import React, { useContext } from 'react'
import { Container } from './styles'
import Switch from 'react-switch'
import { ThemeContext } from 'styled-components'
import { shade } from 'polished'
import { Link, useNavigate } from 'react-router-dom'

type MenuProps = {
  toggledTheme: () => void
}

const Menu = ({ toggledTheme }: MenuProps) => {
  const navigate = useNavigate()
  const isAuthenticated = localStorage.getItem('token')

  const logout = () => {
    localStorage.removeItem('token')
    navigate('/')
  }
  const { colors, title } = useContext(ThemeContext)
  return (
    <Container>
      <nav>
        <ul>
          <li>
            <Link to="/">Dragons</Link>
          </li>
        </ul>
      </nav>
      <span>
        <Switch
          onChange={toggledTheme}
          checked={title === 'dark'}
          checkedIcon={false}
          uncheckedIcon={false}
          height={10}
          width={40}
          handleDiameter={20}
          offColor={shade(0.8, colors.primary)}
          onColor={shade(0.5, colors.secondary)}
        />
        {isAuthenticated && <button onClick={logout}>Logout</button>}
      </span>
    </Container>
  )
}

export default Menu
