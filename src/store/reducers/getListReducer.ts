/**
 *
 * Reducer: `getListReducer`
 *
 */
import { Action, Reducer } from 'redux'

import { mappedDataType } from '../../interfaces/dataItem'

export const GET_DATA_STARTED = 'GET_DATA_STARTED'
export const GET_DATA = 'GET_DATA'

interface DataInterface {
	items: mappedDataType
	loading: boolean
}

const initState: DataInterface = {
	items: [],
	loading: false,
}

interface GetDataStartedAction extends Action<typeof GET_DATA_STARTED> {
	type: typeof GET_DATA_STARTED
}
interface GetDataAction extends Action<typeof GET_DATA> {
	type: typeof GET_DATA
	payload: {
		data: mappedDataType
	}
}

type dataActions = GetDataStartedAction | GetDataAction

const getListReducer: Reducer<DataInterface, dataActions> = (
	state = initState,
	action: dataActions
) => {
	switch (action.type) {
		case GET_DATA_STARTED:
			return {
				...state,
				loading: true,
			}
		case GET_DATA:
			return {
				...state,
				items: action.payload.data,
				loading: false,
			}
		default:
			return state
	}
}

export default getListReducer
