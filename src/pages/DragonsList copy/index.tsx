import React, { useState } from 'react'
import Container from '../../components/Container'
import Drawer from '../../components/Drawer'
import DragonForm from '../../components/forms/dragon'
import { useGetDragons } from '../../hooks/useGetDragons'
import Header from '../../components/Header'
import { Spinner } from '../../components/Loader'
import Content from './components/Content'
import { sortData } from '../../utils/sort'

const DragonList = () => {
  const { data, isFetching } = useGetDragons()
  const [isVisibleDrawer, setIsVisibleDrawer] = useState(false)

  if (isFetching) return <Spinner />

  return (
    <Container>
      <Header
        title="Lista de dragões"
        setIsVisibleDrawer={setIsVisibleDrawer}
        buttonText="Criar novo dragão"
        isVisibleDrawer={isVisibleDrawer}
      />
      <section>
        {isVisibleDrawer ? (
          <Drawer
            title="Criar novo dragão"
            setIsVisibleDrawer={setIsVisibleDrawer}
          >
            <DragonForm setIsVisibleDrawer={setIsVisibleDrawer} />
          </Drawer>
        ) : (
          <Content data={sortData({ data, key: 'name', order: 'asc' })} />
        )}
      </section>
    </Container>
  )
}

export default DragonList
