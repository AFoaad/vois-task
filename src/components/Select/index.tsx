/*
 *
 * Component: `Select`.
 *
 */
import { memo } from 'react'
import { SelectProps, item } from './index.interface'

const Select = ({ title, data, onChange, value, ...props }: SelectProps) => {
	return (
		<div className="flex flex-row items-center">
			<span className="text-lg text-gray-700 dark:text-cyan-50 px-2">
				{title}
			</span>
			<div className=" xl:w-86">
				<select
					{...props}
					value={value}
					onChange={onChange}
					{...{ 'data-testid': 'select' }}
					className="form-select form-select-lg
      appearance-none
      block
      w-full
      px-4
      py-2
      text-xl
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
				>
					{data.map((item: item) => (
						<option key={item.key || item.name} value={item.key || item.name}>
							{item.name}
						</option>
					))}
				</select>
			</div>
		</div>
	)
}

export default memo(Select)
