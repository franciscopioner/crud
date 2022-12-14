import React from 'react'
import { render } from '@testing-library/react'
import Header from '../../components/Header'

describe('Header Component', () => {
  it('should render title', () => {
    const name = 'Toothless'
    const { getByText } = render(<Header title={name} />)

    expect(getByText('Toothless')).toBeInTheDocument()
  })

  it('should render button when shouldShowButton is true', () => {
    const name = 'Toothless'
    const buttonText = 'Criar'
    const isVisibleDrawer = false
    const setIsVisibleDrawer = () => {}
    const { getByText } = render(
      <Header
        title={name}
        buttonText={buttonText}
        isVisibleDrawer={isVisibleDrawer}
        setIsVisibleDrawer={setIsVisibleDrawer}
      />
    )

    expect(getByText('Criar')).toBeInTheDocument()
  })

  it('should not render button when shouldShowButton is false ', () => {
    const name = 'Toothless'
    const buttonText = 'Criar'
    const isVisibleDrawer = true
    const setIsVisibleDrawer = () => {}
    const { queryByText } = render(
      <Header
        title={name}
        buttonText={buttonText}
        isVisibleDrawer={isVisibleDrawer}
        setIsVisibleDrawer={setIsVisibleDrawer}
      />
    )

    expect(queryByText('Criar')).not.toBeInTheDocument()
  })
})
