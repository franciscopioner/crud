import React, { useEffect } from 'react'
import Drawer from '../../components/Drawer'
import Container from '../../components/Container'
import Header from '../../components/Header'
import LoginForm from '../../components/forms/login'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()

  useEffect(() => {
    if (localStorage.getItem('token') !== null) {
      navigate('/dragons')
    }
  }, [navigate])

  return (
    <Container>
      <Header title="Login" />
      <section>
        <Drawer title="Login">
          <LoginForm />
        </Drawer>
      </section>
    </Container>
  )
}

export default Login
