import { getByText, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import React from 'react'
describe('Drawer Component', () => {
  it('shold render list items', () => {

    vi.mock('react-query', () => ({
      useQuery: () => ({
        isLoading: false,
        error: {},
        data: {
          createdAt: '2022-10-13T07:44:54.040Z',
          name: 'Toothless',
          type: 'Fire',
          histories: '',
          id: '4',
        },
      }),
    }))

  })
})
