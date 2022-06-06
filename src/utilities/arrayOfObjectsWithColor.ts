/**
 *
 * Utility: `arrayOfObjectsWithColor`
 *
 */
import { ItemInterface } from '../interfaces/dataItem'
import { generateRandomColor } from './generateRandomColor'

/**
 * @description adding random generated color to each object of the array
 * @param array array of  objects
 * @returns same array of objects with color property gene
 */
export const arrayOfObjectsWithColor = (
	array: ItemInterface[] = []
): ItemInterface[] =>
	array.map((item: object) => ({
		...item,
		color: generateRandomColor(),
	}))
