import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Card from '.'
import data from '@/data/data.json'
import { Allowance } from '@/types/allowances'

describe('Card', () => {
  let mockAllowance: Allowance

  beforeEach(() => {
    mockAllowance = data[0]
  })

  it('renders as expected', () => {
    const { container } = render(<Card allowance={mockAllowance} />)
    expect(container).toMatchSnapshot()
  })

  it('displays the allowance name correctly', () => {
    render(<Card allowance={mockAllowance} />)
    expect(screen.getByText(mockAllowance.name)).toBeInTheDocument()
  })

  it('calculates and displays percentage correctly', () => {
    render(<Card allowance={mockAllowance} />)
    const activeCard = { ...mockAllowance, active: true }
    const percentage = Math.round(
      (Number(activeCard.spent) / Number(activeCard.amount)) * 100
    )
    expect(screen.getByText(`${percentage}% utilised`)).toBeInTheDocument()
  })

  it('renders "Activate Card" when allowance is inactive', () => {
    const inactiveAllowance = { ...mockAllowance, active: false }
    render(<Card allowance={inactiveAllowance} />)
    expect(screen.getByText('Activate card')).toBeInTheDocument()
  })
})
