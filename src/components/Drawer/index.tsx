import React from 'react'
import { Body, Container, Header, Footer } from './styles'

type DrawerProps = {
  title: string
  children: React.ReactNode
  setIsVisibleDrawer?: (value: boolean) => void
}

const Drawer = ({ title, setIsVisibleDrawer, children }: DrawerProps) => {
  return (
    <Container>
      <Header>
        <h2>{title}</h2>
      </Header>
      <Body>{children}</Body>
      {setIsVisibleDrawer && (
        <Footer>
          <button onClick={() => setIsVisibleDrawer(false)}>Fechar</button>
        </Footer>
      )}
    </Container>
  )
}

export default Drawer
