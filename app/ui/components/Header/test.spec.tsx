import { render, screen } from '@testing-library/react'

import Header from '~/app/ui/components/Header/Header'

describe('Header', () => {
  test('render correctly', () => {
    render(<Header />)

    expect(screen.getByRole('link')).toHaveAttribute('href', '/')
    expect(screen.getByRole('img')).toHaveAttribute('alt', 'logo')
    expect(screen.getByRole('img')).toHaveAttribute('src', '/logo.svg')
    expect(screen.getByRole('heading')).toHaveTextContent('WeatherApp')
  })
})
