import React from 'react'
import { Main } from './styles'

type ContainerProps = {
  children: React.ReactNode
}

const Container = ({ children }: ContainerProps) => {
  return <Main>{children}</Main>
}

export default Container
