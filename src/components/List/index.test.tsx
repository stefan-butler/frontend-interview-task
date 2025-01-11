import { render, waitFor } from '@testing-library/react'
import List from '@/components/List'
import '@testing-library/jest-dom'
import 'jest-fetch-mock'
import data from '@/data/data.json'
import { Allowance } from '@/types/allowances'

//mock card component 
interface CardProps {
  allowance: Allowance
}

jest.mock('../Card', () => {
  const MockCard = ({ allowance }: CardProps) => {
    return <div data-testid="card">{allowance.name}</div>
  }
  MockCard.displayName = 'MockCard'
  return MockCard
})

describe('List', () => {
  beforeEach(() => {
    fetchMock.mockResponse(JSON.stringify({ result: data }), { status: 200 })
  })

  it('renders as expected', async () => {
    const { container } = render(<List />)
    await waitFor(() => expect(container).toMatchSnapshot())
  })

  it('renders the correct number of cards', async () => {
    const { getAllByTestId } = render(<List />)
    await waitFor(() => {
      const cards = getAllByTestId('card')
      expect(cards).toHaveLength(data.length)
    })

    it('renders allowance details correctly', async () => {
      const { getByText } = render(<List />)
      await waitFor(() => {
        expect(getByText(data[0].name)).toBeInTheDocument()
        expect(getByText(data[1].name)).toBeInTheDocument()
      })
    })
  })
})
