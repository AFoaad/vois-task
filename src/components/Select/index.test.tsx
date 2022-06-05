/**
 * Test: `SelectTest`
 */
import { screen, render, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Select from './index'

const data = [
	{
		name: 'test',
	},
	{
		name: 'test 2',
	},
]
describe('Select', () => {
	const component = <Select data={data} title="Camp" />

	it('renders correctly', () => {
		render(component)
		expect(screen.getByText('Camp')).toBeInTheDocument()
	})

	it('value can change', () => {
		render(component)
		fireEvent.change(screen.getByTestId('select'), {
			target: { name: 'test2' },
		})
	})

	it('should display the correct number of options', () => {
		render(component)
		expect(screen.getAllByRole('option').length).toBe(2)
	})

	it('should allow user to change option', () => {
		render(component)
		userEvent.selectOptions(
			screen.getByRole('combobox'),
			screen.getByRole('option', { name: 'test' })
		)
		expect(
			screen.getByRole('option', { name: 'test', selected: true })
		).toBeTruthy()
	})
})
