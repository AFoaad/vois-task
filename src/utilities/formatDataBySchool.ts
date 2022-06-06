/**
 *
 * Utility: `formatArrayOfObjectsBySchool`
 *
 */
import { generateRandomColor } from './generateRandomColor'
import { ItemInterface, ItemsInterface } from '../interfaces/dataItem'

type AccumulatorType = { count: number; items: number[] }
/**
 *
 * @description format data by school
 * @returns object of arrays
 */
export const formatArrayOfObjectsBySchool = (data: ItemsInterface) => {
	const finalResult = []
	for (const key in data) {
		const lessons: AccumulatorType = data[key].reduce(
			(acc: AccumulatorType, item: ItemInterface) => ({
				count: acc.count + item.lessons,
				items: [...(acc.items || []), item.lessons],
			}),
			{ count: 0, items: [] }
		)
		const school = {
			school: key,
			lessons: lessons.items,
			lessonsCount: lessons.count,
			color: generateRandomColor(),
			allSchoolInfo: data[key],
		}
		finalResult.push(school)
	}
	return finalResult
}
