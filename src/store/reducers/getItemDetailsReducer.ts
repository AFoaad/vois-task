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

interface InitStateInterface {
	loading: boolean
	item: ItemInterface
}

const initState: InitStateInterface = {
	loading: false,
	item: {},
}

interface GetLookupsStartedAction extends Action<typeof GET_DETAILS_STARTED> {
	type: typeof GET_DETAILS_STARTED
}
interface GetLookupsFinishedAction extends Action<typeof GET_DETAILS_FINISHED> {
	type: typeof GET_DETAILS_FINISHED
}
interface GetItemRestAction extends Action<typeof ITEM_DETAILS_RESET> {
	type: typeof ITEM_DETAILS_RESET
}

interface GetLookupsAction extends Action<typeof GET_DETAILS> {
	type: typeof GET_DETAILS
	payload: {
		data: ItemInterface
	}
}

type LookupsActions =
	| GetLookupsStartedAction
	| GetLookupsAction
	| GetLookupsFinishedAction
	| GetItemRestAction

const getItemDetailsReducer: Reducer<InitStateInterface, LookupsActions> = (
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
