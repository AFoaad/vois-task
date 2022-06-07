/*
 *
 * Component: `Checkbox`.
 *
 */
import { FC, memo, useMemo } from 'react'
import './style.css'
import { RadioInputProps } from './index.interface'

const Checkbox:FC<RadioInputProps> = ({
	count,
	title,
	checked,
	color,
	...props
}) => {
	const colorStyle = useMemo(() => ({ color: checked ? color : '#75717166' }), [checked])

	return (
		<div className="flex items-center m-5">
			<label className="flex flex-row items-baseline">
				<input
					{...props}
					type="checkbox"
					className={'form-radio appearance-checkbox mr-2'}
					checked={checked}
					name={title}
					style={{
						...colorStyle,
						// eslint-disable-next-line @typescript-eslint/ban-ts-comment
						//@ts-ignore
						'--color': colorStyle.color,
					}}
				/>
				<div className="flex flex-col">
					{count ? (
						<span className="ml-2 text-3xl" style={colorStyle}>
							{`${count} `} <span className="text-xl">Lessons</span>
						</span>
					) : null}
					<span className="ml-2 text-sm" style={colorStyle}>
						{title}
					</span>
				</div>
			</label>
		</div>
	)
}

export default memo(Checkbox)
