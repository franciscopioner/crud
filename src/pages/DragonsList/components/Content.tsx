import React from 'react'
import { Dragon, Dragons } from '../../../core/constants/types/dragon'
import Card from '../../../components/Card'

type ContentProps = {
  data: Dragons
}

const Content = ({ data }: ContentProps) => {
  return (
    <>
      {data?.map((dragon: Dragon, index) => {
        return <Card key={index} id={dragon.id} name={dragon.name} />
      })}
    </>
  )
}

export default Content
