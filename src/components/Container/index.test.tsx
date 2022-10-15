import React from 'react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import Container from './'

describe('Container', () => {
  test('should render children of container component', () => {
    const children: React.ReactNode = <div>Teste</div>
    const { getByText } = render(<Container>{children}</Container>)

    expect(getByText('Teste')).toBeInTheDocument()
  })
})
