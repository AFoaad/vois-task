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

interface InitStateInterface {
	lookupsLists: lookupsListsInterface
	loading: boolean
}

const initState: InitStateInterface = {
	lookupsLists: {
		camps: [],
		schools: [],
		countries: [],
	},
	loading: false,
}

interface GetLookupsStartedAction extends Action<typeof GET_LOOKUPS_STARTED> {
	type: typeof GET_LOOKUPS_STARTED
}
interface GetLookupsFinishedAction extends Action<typeof GET_LOOKUPS_FINISHED> {
	type: typeof GET_LOOKUPS_FINISHED
}

interface GetLookupsAction extends Action<typeof GET_LOOKUPS> {
	type: typeof GET_LOOKUPS
	payload: {
		data: lookupsListsInterface
	}
}

type LookupsActions =
	| GetLookupsStartedAction
	| GetLookupsAction
	| GetLookupsFinishedAction

const getLookupsReducer: Reducer<InitStateInterface, LookupsActions> = (
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
