/**
 *
 * Action: `getLookups`
 *
 */
import { Dispatch } from 'redux'

import {
	GET_LOOKUPS,
	GET_LOOKUPS_FINISHED,
	GET_LOOKUPS_STARTED,
} from '../../store/reducers/getLookupsReducer'
import { formatArrayToLists } from '../../utilities/formatArrayToLists'

export const getLookups = () => {
	return async (dispatch: Dispatch) => {
		dispatch({
			type: GET_LOOKUPS_STARTED,
		})
		try {
			const response = await fetch(
				'https://raw.githubusercontent.com/abdelrhman-arnos/analysis-fe-challenge/master/data.json'
			)
			const data = await response.json()
			const listFormatted = formatArrayToLists(data)
			dispatch({
				type: GET_LOOKUPS,
				payload: {
					data: listFormatted,
				},
			})
		} catch (error) {
			dispatch({
				type: GET_LOOKUPS_FINISHED,
			})
		}
	}
}
