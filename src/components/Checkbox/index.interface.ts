/**
 *
 * @interface Radio IProps
 *
 */
export interface RadioInputProps
	extends React.HtmlHTMLAttributes<HTMLInputElement> {
	title: string
	count: number
	checked: boolean
	value: string
}
