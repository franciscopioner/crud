import React from 'react'
import { Container } from './styles'
import { api } from '../../services/api/methods'
import { Link } from 'react-router-dom'

type CardProps = {
  id?: string
  name: string
}

const Card = ({ id, name }: CardProps) => {
  const { mutateAsync, isLoading } = api.deleteDragon()
  const handleDelete = () => {
    mutateAsync(id)
  }

  return (
    <Container>
      <Link to={`/dragons/${id}`}>{name}</Link>
      <button onClick={handleDelete} disabled={isLoading}>
        {isLoading ? 'Deletando...' : 'Deletar'}
      </button>
    </Container>
  )
}

export default Card
