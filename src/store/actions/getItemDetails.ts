/**
 *
 * Action: `getItemDetails`
 *
 */
import { ItemInterface } from '../../interfaces/dataItem'
import { Dispatch } from 'redux'

import {
	GET_DETAILS_STARTED,
	GET_DETAILS,
	ITEM_DETAILS_RESET,
} from '../reducers/getItemDetailsReducer'

export const getItemDetails = (id: string) => {
	return async (dispatch: Dispatch) => {
		dispatch({
			type: GET_DETAILS_STARTED,
		})
		try {
			const response = await fetch(
				'https://raw.githubusercontent.com/abdelrhman-arnos/analysis-fe-challenge/master/data.json'
			)
			const data = await response.json()
			const item = data.filter((item: ItemInterface) => item.id === id)[0]

			if (!item) return
			dispatch({
				type: GET_DETAILS,
				payload: {
					data: item,
				},
			})
		} catch (error) {
			dispatch({
				type: ITEM_DETAILS_RESET,
			})
		}
	}
}
