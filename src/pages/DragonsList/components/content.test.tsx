import React from 'react'
import { render } from '@testing-library/react'
import Content from './Content'
import { QueryClient, QueryClientProvider } from 'react-query'
// import Card from '../../../components/Card'

describe('Conten Component', () => {
  it('should render dragons list', () => {
    const queryClient = new QueryClient()
    const data = {
      data: [
        {
          createdAt: '2022-10-13T07:44:54.040Z',
          name: 'Toothless',
          type: 'Fire',
          histories: '',
          id: '4',
        },
      ],
    }
    const { findByText, debug } = render(
      <QueryClientProvider client={queryClient}>
        <Content data={data.data} />
      </QueryClientProvider>
    )

    debug()

    expect(findByText('Toothless')).toBeInTheDocument()
  })
})
