import React, { memo } from 'react'
import { Dragon, Dragons } from '../../../core/constants/types/dragon'
import Card from '../../../components/Card'

type ContentProps = {
  data: Dragons
}

const Content = ({ data }: ContentProps) => {
  return (
    <>
      {data.length < 1
        ? 'Lista vazia'
        : data.map((dragon: Dragon) => {
            return <Card key={dragon.id} id={dragon.id} name={dragon.name} />
          })}
    </>
  )
}

export default memo(Content)
