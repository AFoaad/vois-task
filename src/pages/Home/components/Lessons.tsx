/**
 *
 * Component: `Lessons`
 *
 */
import React, { FC, memo, useMemo, useCallback } from 'react'
import Checkbox from '../../../components/Checkbox'
import { useAppSelector } from '../../../hooks/useAppSelector'
import { MappedItemType } from '../../../interfaces/dataItem'

interface Props {
	country: string | null | undefined
	setSelectedSchools: React.Dispatch<React.SetStateAction<string[]>>
	selectedSchools: string[]
}

const Lessons: FC<Props> = ({
	country,
	setSelectedSchools,
	selectedSchools,
}): JSX.Element => {
	const { items } = useAppSelector(({ getList }) => getList)

	const lessonsCount = useMemo(
		() => items.reduce((acc, item) => acc + item.lessonsCount, 0),
		[items]
	)

	const onChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			const newSchool: string = e.target.value
			if (e.target.checked) {
				return setSelectedSchools((prevState: string[]): string[] => [
					...prevState,
					newSchool,
				])
			}
			setSelectedSchools((prevState) => {
				const filteredData = prevState?.filter(
					(school: string) => school !== newSchool
				)
				return filteredData
			})
		},
		[setSelectedSchools]
	)

	return (
		<div className="w-96 p-4 border-l-2">
			<div className="">
				<h4 className="text-2xl w-fit text-gray-400 dark:text-white">
					<span className="text-3xl text-gray-700 dark:text-white">{`${
						lessonsCount || 0
					} `}</span>
					Lessons
				</h4>
				{country ? (
					<span className="text-gray-400 dark:text-white">in {country}</span>
				) : null}
			</div>
			<div className="h-96 mt-10 overflow-y-scroll scrollbar">
				{items.map((item: MappedItemType) => (
					<Checkbox
						onChange={onChange}
						title={item.school as string}
						value={item.school as string}
						key={item.school}
						color={item.color}
						count={item.lessonsCount}
						checked={selectedSchools.includes(item.school as string)}
					/>
				))}
			</div>
		</div>
	)
}

export default memo(Lessons)
