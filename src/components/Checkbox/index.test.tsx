/**
 * Test: `CheckboxTest`
 */
import { screen, render } from '@testing-library/react'
import CheckBox from './index'

describe('Checkbox', () => {
	const component = (
		<CheckBox title="School" count={10} value="test" checked={true} />
	)
	it('renders correctly', () => {
		render(component)
		expect(screen.getByText('School')).toBeInTheDocument()
	})
})
