import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Drawer from '../../components/Drawer'
import Container from '../../components/Container'
import { api } from '../../services/api/methods'
import DragonForm from '../../components/forms/dragon'
import Header from '../../components/Header'

const DragonItem = () => {
  const { id } = useParams()
  const { data, isFetching } = api.getDragons(id)
  const [isVisibleDrawer, setIsVisibleDrawer] = useState(false)

  return (
    <Container>
      {isFetching ? (
        'Carregando...'
      ) : (
        <>
          <Header
            title={`Dragão ${data.name}`}
            setIsVisibleDrawer={setIsVisibleDrawer}
            buttonText="Editar"
            isVisibleDrawer={isVisibleDrawer}
          />
          <section>
            {!isVisibleDrawer ? (
              <Drawer title="Detalhes do dragão">
                <ul>
                  <li>Nome: {data.name}</li>
                  <li>Tipo: {data.type}</li>
                  <li>Histórias: {data.histories}</li>
                </ul>
              </Drawer>
            ) : (
              <Drawer
                title="Detalhes do dragão"
                setIsVisibleDrawer={setIsVisibleDrawer}
              >
                <DragonForm
                  data={data}
                  setIsVisibleDrawer={setIsVisibleDrawer}
                />
              </Drawer>
            )}
          </section>
        </>
      )}
    </Container>
  )
}

export default DragonItem
