/*
 *
 * Component: `Checkbox`.
 *
 */
import { memo, useMemo } from 'react'
import './style.css'
import { RadioInputProps } from './index.interface'

const Checkbox = ({
	count,
	title,
	checked,
	color,
	...props
}: RadioInputProps) => {
	const colorToApply = checked ? color : 'rgba(255,255,255,0.4)'

	const colorStyle = useMemo(() => ({ color: colorToApply }), [colorToApply])

	return (
		<div className="flex items-center m-5">
			<label className="flex flex-row items-baseline">
				<input
					{...props}
					type="checkbox"
					className={'form-radio appearance-checkbox mr-2'}
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
