/**
 *
 * Utility: `filterLookupListBasedOnQuery`
 *
 */

import { lookupItemInterface } from '../interfaces/lookups'
import { ItemInterface } from '../interfaces/dataItem'
import { QueryType } from '../interfaces/query'
/**
 *
 * @param array data array to be filtered by @param query
 * @param query object of strings to filter by
 * @returns array of objects based on query
 *
 */
export const filterListBasedOnQuery = (
	array: ItemInterface[],
	query: QueryType<string>
) => {
	const schools: lookupItemInterface[] = []

	array.forEach((item) => {
		if (item.camp === query.camp && item.country === query.country) {
			schools.push({ name: item.school })
		}
	})
	return schools
}
