/**
 *
 * @interface IProps
 *
 */
export interface item {
	key?: string
	name?: string
}
export interface SelectProps
	extends React.SelectHTMLAttributes<HTMLSelectElement> {
	title: string
	data: Array<item>
}
