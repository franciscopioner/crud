import React, { useState } from 'react'
import Container from '../../components/Container'
import Drawer from '../../components/Drawer'
import DragonForm from '../../components/forms/dragon'
import { Dragon } from '../../core/constants/types/dragon'
import { api } from '../../services/api/methods'
import Card from '../../components/Card'
import Header from '../../components/Header'

const DragonList = () => {
  const { data, isFetching } = api.getDragons()
  const [isVisibleDrawer, setIsVisibleDrawer] = useState(false)

  return (
    <Container>
      <Header
        title="Lista de dragões"
        setIsVisibleDrawer={setIsVisibleDrawer}
        buttonText="Criar novo dragão"
        isVisibleDrawer={isVisibleDrawer}
      />
      <section>
        {isFetching ? (
          'Carregando...'
        ) : !isVisibleDrawer ? (
          data?.map((dragon: Dragon) => {
            return <Card key={dragon.id} id={dragon.id} name={dragon.name} />
          })
        ) : (
          <Drawer
            title="Criar novo dragão"
            setIsVisibleDrawer={setIsVisibleDrawer}
          >
            <DragonForm setIsVisibleDrawer={setIsVisibleDrawer} />
          </Drawer>
        )}
      </section>
    </Container>
  )
}

export default DragonList
