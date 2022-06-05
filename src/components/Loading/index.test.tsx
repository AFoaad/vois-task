/**
 * Test: `LoadingTest`
 */
import { render, screen } from '@testing-library/react'
import Loading from './index'

describe('render loading', () => {
	test('should render correctly', () => {
		render(<Loading />)
		const element = screen.getByText('Loading...')
		expect(element).toBeInTheDocument()
	})
})
