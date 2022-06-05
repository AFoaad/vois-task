import { Chart as ChartJS, registerables } from 'chart.js'
import { FC, useCallback, useMemo, useRef } from 'react'
import { getElementAtEvent, Line } from 'react-chartjs-2'
import { useHistory } from 'react-router-dom'
import { ItemInterface, MappedItemType } from '../../../interfaces/dataItem'
import monthsNames from '../../../constants/monthsNames'
import { useAppSelector } from '../../../hooks/useAppSelector'
import { DETAILS_APP_NAME } from '../../../constants/RoutesNames'

ChartJS.register(...registerables)

interface IPros {
	selectedSchools: string[]
}

const Chart: FC<IPros> = ({ selectedSchools }): JSX.Element => {
	const { push } = useHistory()
	const { items } = useAppSelector(({ getList }) => getList)
	const chartRef = useRef<ChartJS<'line', number[], string>>(null)

	const datasets = useMemo(() => {
		const dataSet: [] = []
		items.forEach((item: ItemInterface) => {
			if (selectedSchools.includes(item?.school)) {
				const data = {
					label: item?.school,
					data: item?.lessons,
					borderColor: item?.color,
					backgroundColor: item?.color,
					borderWidth: 1.5,
				}
				dataSet.push(data as never)
			}
		})
		return dataSet
	}, [selectedSchools, items])

	const onClick = useCallback(
		(event: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
			const element = getElementAtEvent(
				chartRef?.current as ChartJS<'line'>,
				event
			)
			const firstElement = element[0]
			// if(typeof element[0]?.datasetIndex !== "number"){
			// 	return false
			// }
			if (
				typeof firstElement?.datasetIndex === 'undefined' ||
				firstElement?.datasetIndex === null
			) {
				return false
			}
			const { label } = datasets[firstElement.datasetIndex]

			items.forEach((item: MappedItemType) => {
				if (item.school === label) {
					item?.allSchoolInfo.forEach((school: ItemInterface) => {
						// eslint-disable-next-line @typescript-eslint/ban-ts-comment
						//@ts-ignore
						if (school.lessons == firstElement.element?.$context.raw) {
							push(`${DETAILS_APP_NAME}/${school.id}`)
						}
					})
				}
			})
		},
		[items, push, datasets]
	)

	return (
		<div className="w-3/4 py-6 px-4">
			<Line
				ref={chartRef}
				onClick={onClick}
				data={{
					labels: monthsNames,
					datasets: datasets,
				}}
			/>
		</div>
	)
}

export default Chart
