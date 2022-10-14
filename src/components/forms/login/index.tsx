import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { User } from '../../../core/constants/types/dragon'
import usePersistedState from '../../../hooks/use-persisted-state'

const LoginForm = () => {
  const navigate = useNavigate()
  const [loginMessage, setLoginMessage] = useState('')
  const [user, setUser] = usePersistedState('user', {} as User)
  const { register, handleSubmit } = useForm()

  const showMessage = (value: string) => {
    setLoginMessage(value)
    setTimeout(() => {
      setLoginMessage('')
    }, 2000)
  }

  const onSubmit = ({ name, password }: any) => {
    if (!user.name) {
      setUser({ name, password } as never)
      return showMessage('Usuário cadastrado')
    }
    if (user.name !== name || user.password !== password) {
      return showMessage('Dados incorretos')
    }
    localStorage.setItem('token', 'token')
    navigate('/dragons')
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder={'Usuário...'}
        {...register('name', { required: true })}
      />
      <input
        type="password"
        placeholder={'Senha...'}
        {...register('password', { required: true })}
      />
      <span>{loginMessage}</span>
      <button type="submit">Salvar/Entrar</button>
    </form>
  )
}

export default LoginForm
