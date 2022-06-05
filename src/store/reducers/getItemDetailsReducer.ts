/**
 *
 * Reducer: `getItemDetailsReducer`
 *
 */
import { Action, Reducer } from 'redux'

import { ItemInterface } from '../../interfaces/dataItem'

export const GET_DETAILS_STARTED = 'GET_DETAILS_STARTED'
export const GET_DETAILS = 'GET_DETAILS'
export const GET_DETAILS_FINISHED = 'GET_DETAILS_FINISHED'
export const ITEM_DETAILS_RESET = 'ITEM_DETAILS_RESET'

interface initStateInterface {
	loading: boolean
	item: ItemInterface
}

const initState = {
	loading: false,
	item: {},
}

interface getLookupsStartedAction extends Action<typeof GET_DETAILS_STARTED> {
	type: typeof GET_DETAILS_STARTED
}
interface getLookupsFinishedAction extends Action<typeof GET_DETAILS_FINISHED> {
	type: typeof GET_DETAILS_FINISHED
}
interface getItemRestAction extends Action<typeof ITEM_DETAILS_RESET> {
	type: typeof ITEM_DETAILS_RESET
}

interface getLookupsAction extends Action<typeof GET_DETAILS> {
	type: typeof GET_DETAILS
	payload: {
		data: ItemInterface
	}
}

type LookupsActions =
	| getLookupsStartedAction
	| getLookupsAction
	| getLookupsFinishedAction
	| getItemRestAction

const getItemDetailsReducer: Reducer<initStateInterface, LookupsActions> = (
	state = initState,
	action: LookupsActions
) => {
	switch (action.type) {
		case GET_DETAILS_STARTED:
			return {
				...state,
				loading: true,
			}
		case GET_DETAILS: {
			return {
				...state,
				item: action.payload.data,
				loading: false,
			}
		}
		case GET_DETAILS_FINISHED: {
			return state
		}
		default:
			return state
	}
}

export default getItemDetailsReducer
