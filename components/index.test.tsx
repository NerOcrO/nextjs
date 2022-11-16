import { render, screen } from '@testing-library/react'

import Recherche from './Recherche'

describe('temp', () => {
  it('test', () => {
    render(<Recherche />)
    const wording = screen.getByText('RECHERCHE')

    expect(wording).toBeInTheDocument()
  })
})
