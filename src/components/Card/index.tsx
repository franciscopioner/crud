import React from 'react'
import { Container } from './styles'
import { useDeleteDragon } from '../../hooks/useDeleteDragon'
import { Link } from 'react-router-dom'

type CardProps = {
  id?: string
  name: string
}

const Card = ({ id, name }: CardProps) => {
  const { mutateAsync, isLoading } = useDeleteDragon()
  const handleDelete = () => {
    mutateAsync(id as string)
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
