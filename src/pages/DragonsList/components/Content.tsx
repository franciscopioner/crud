import React from 'react'
import { Dragon, Dragons } from '../../../core/constants/types/dragon'
import Card from '../../../components/Card'

type ContentProps = {
  data: Dragons
}

const Content = ({ data }: ContentProps) => {
  return (
    <>
      {data?.map((dragon: Dragon) => {
        return <Card key={dragon.id} id={dragon.id} name={dragon.name} />
      })}
    </>
  )
}

export default Content
