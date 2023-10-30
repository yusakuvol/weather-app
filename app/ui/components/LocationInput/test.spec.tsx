// 必要なライブラリをインポート
import { render, screen } from '@testing-library/react'

import LocationInput from '~/app/ui/components/LocationInput/LocationInput'

describe('LocationInput', () => {
  test('renders without error', () => {
    render(<LocationInput />)

    expect(screen.getByPlaceholderText('tokyo')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Search location' })
    ).toBeInTheDocument()
  })
})
