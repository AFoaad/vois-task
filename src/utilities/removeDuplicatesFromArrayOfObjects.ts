/**
 *
 * Utility: `removeDuplicatesFromArrayOfObjects`
 *
 */
import { lookupItemInterface } from '../interfaces/lookups'
/**
 * @description remove duplicates from array of objects and return array of objects with name property
 * @param array the array of objects that need to remove the duplicates from
 * @returns new set array
 */
export const removeDuplicatesFromArrayOfObjects = (
	array: lookupItemInterface[]
) => {
	const newSet = new Set()

	return array.filter(({ name }) => {
		const duplicate = newSet.has(name)
		newSet.add(name)
		return !duplicate
	})
}
