/**
 *
 * Utility: `sortArrayBasedOnMonth`
 *
 */
import { ItemInterface } from 'interfaces/dataItem'
import monthsNames from '../constants/monthsNames'

/**
 * @function sortArrayBasedOnMonth
 * @param array
 * @returns array of Items sorted by month
 */
export const sortArrayByMonth = (array: ItemInterface[]) =>
	array.sort(
		({ month }: ItemInterface, { month: secondMonth }: ItemInterface) =>
			monthsNames.indexOf(month) - monthsNames.indexOf(secondMonth)
	)
