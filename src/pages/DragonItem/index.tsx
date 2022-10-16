import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Drawer from '../../components/Drawer'
import Container from '../../components/Container'
import { useGetDragon } from '../../hooks/useGetDragon'
import DragonForm from '../../components/forms/dragon'
import Header from '../../components/Header'
import { Spinner } from '../../components/Loader'
import Content from './components/Content'

const DragonItem = () => {
  const { id } = useParams()
  const { data, isFetching } = useGetDragon(id as string)
  const [isVisibleDrawer, setIsVisibleDrawer] = useState(false)

  if (isFetching) return <Spinner />

  return (
    <Container>
      <Header
        title={`Dragão ${data.name}`}
        setIsVisibleDrawer={setIsVisibleDrawer}
        buttonText="Editar"
        isVisibleDrawer={isVisibleDrawer}
      />
      <section>
        {isVisibleDrawer ? (
          <Drawer title="Editar dragão" setIsVisibleDrawer={setIsVisibleDrawer}>
            <DragonForm data={data} setIsVisibleDrawer={setIsVisibleDrawer} />
          </Drawer>
        ) : (
          <Drawer title="Detalhes do dragão">
            <Content data={data} />
          </Drawer>
        )}
      </section>
    </Container>
  )
}

export default DragonItem
