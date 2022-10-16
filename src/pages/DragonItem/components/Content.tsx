import React from 'react'
import { Dragon } from '../../../core/constants/types/dragon'

type ContentProps = {
  data: Dragon
}

const Content = ({ data }: ContentProps) => {
  return (
    <ul>
      <li>Nome: {data.name}</li>
      <li>Tipo: {data.type}</li>
      <li>Histórias: {data.histories}</li>
    </ul>
  )
}

export default Content
