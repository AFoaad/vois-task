/**
 *
 * Utility: `dataOrderUsingSchool`
 *
 */
import { ItemInterface } from 'interfaces/dataItem'

type ItemType = {
	[key: string]: string
}

/**
 * @function arrayOfObjectsWithColor
 * @param array array to be reorder
 * @returns new object
 */
export const dataOrderUsingSchool = (
	array: ItemInterface[] = []
): Record<string, ItemType[]> =>
	array.reduce((acc: Record<string, ItemType[]>, item: ItemInterface) => {
		const previousGroup = acc[item.school]
		acc[item.school as string] = [...(previousGroup || []), item as ItemType]
		return acc
	}, {})
