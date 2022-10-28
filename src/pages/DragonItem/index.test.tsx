import { getByText, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import DragonItem from './index'
import Header from '../../components/Header'

import React from 'react'
import Container from '../../components/Container'
describe('Drawer Component', () => {
  it('shold render list items', () => {
    const data = {
      createdAt: '2022-10-13T07:44:54.040Z',
      name: 'Toothless',
      type: 'Fire',
      histories: '',
      id: '4',
    }
    const { debug } = render(<DragonItem />)

    // const editButton = getByText('Editar')

    debug()

    expect(render(<Header title={data.name} />))
    // userEvent.click(editButton)

    // debug()

    // expect(getByText('Editar dragão')).toBeInTheDocument()
  })
})
