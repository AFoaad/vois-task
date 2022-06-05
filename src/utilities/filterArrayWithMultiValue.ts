/**
 *
 * Utility: `filterArrayWithMultiValue`
 *
 */
import { QueryType } from '../interfaces/query'

/**
 * @description return array with filtered array using multiple values
 * @param array array to be filtered
 * @param query query to filter the array by
 * @returns new array with filtered items
 */
export const filterArrayWithMultiValue = (
	array: [] = [],
	query: QueryType<string>
) => {
	const queryKeys = Object.keys(query)
	const newArray = array.filter((item) => {
		return queryKeys.every(
			(key) => item[key] === query[key] || query[key] === 'All'
		)
	})
	return newArray
}
