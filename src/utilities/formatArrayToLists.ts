/**
 *
 * Utility: `formatArrayToLists`
 *
 */
import { lookupItemInterface } from '../interfaces/lookups'
import { removeDuplicatesFromArrayOfObjects } from './removeDuplicatesFromArrayOfObjects'
import { ItemInterface } from '../interfaces/dataItem'
import { QueryType } from '../interfaces/query'
import { filterListBasedOnQuery } from './filterListBasedOnQuery'

type AccumulatorType = {
	camps: lookupItemInterface[]
	schools: lookupItemInterface[]
	countries: lookupItemInterface[]
}

/**
 * @function formatArrayToLists
 * @description transform array to custom model for select inputs
 * @param array the array of objects that need to transform
 * @returns new objects of arrays with properties camps, countries, schools
 */
export const formatArrayToLists = (
	array: [] = [],
	query: QueryType<string>
) => {
	const newModel = array.reduce(
		(acc: AccumulatorType, item: ItemInterface) => {
			return {
				...acc,
				camps: [...acc.camps, { name: item.camp }],
				countries: [...acc.countries, { name: item.country }],
			}
		},
		{ camps: [], countries: [], schools: [] }
	)

	const allOption = { name: 'All' }
	const schoolsBasedOnQuery = filterListBasedOnQuery(array, query)
	return {
		camps: [...removeDuplicatesFromArrayOfObjects(newModel.camps)],
		schools: [
			allOption,
			...removeDuplicatesFromArrayOfObjects(schoolsBasedOnQuery),
		],
		countries: [...removeDuplicatesFromArrayOfObjects(newModel.countries)],
	}
}
