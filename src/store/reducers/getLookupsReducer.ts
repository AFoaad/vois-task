/**
 *
 * Reducer: `getLookupsReducer`
 *
 */
import { Action, Reducer } from 'redux'

import { lookupsListsInterface } from '../../interfaces/lookups'

export const GET_LOOKUPS_STARTED = 'GET_LOOKUPS_STARTED'
export const GET_LOOKUPS = 'GET_LOOKUPS'
export const GET_LOOKUPS_FINISHED = 'GET_LOOKUPS_FINISHED'

interface initStateInterface {
	lookupsLists: lookupsListsInterface
	loading: boolean
}

const initState: initStateInterface = {
	lookupsLists: {
		camps: [],
		schools: [],
		countries: [],
	},
	loading: false,
}

interface getLookupsStartedAction extends Action<typeof GET_LOOKUPS_STARTED> {
	type: typeof GET_LOOKUPS_STARTED
}
interface getLookupsFinishedAction extends Action<typeof GET_LOOKUPS_FINISHED> {
	type: typeof GET_LOOKUPS_FINISHED
}

interface getLookupsAction extends Action<typeof GET_LOOKUPS> {
	type: typeof GET_LOOKUPS
	payload: {
		data: lookupsListsInterface
	}
}

type LookupsActions =
	| getLookupsStartedAction
	| getLookupsAction
	| getLookupsFinishedAction

const getLookupsReducer: Reducer<initStateInterface, LookupsActions> = (
	state = initState,
	action: LookupsActions
) => {
	switch (action.type) {
		case GET_LOOKUPS_STARTED:
			return {
				...state,
				loading: true,
			}
		case GET_LOOKUPS: {
			return {
				...state,
				lookupsLists: action.payload.data,
				loading: false,
			}
		}
		case GET_LOOKUPS_FINISHED: {
			return state
		}
		default:
			return state
	}
}

export default getLookupsReducer
