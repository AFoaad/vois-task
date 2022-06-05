/**
 *
 * Store
 *
 */
import {
	combineReducers,
	legacy_createStore as createStore,
	applyMiddleware,
} from 'redux'
import thunk, { ThunkMiddleware } from 'redux-thunk'

import getList from './reducers/getListReducer'
import getLookups from './reducers/getLookupsReducer'
import getItemDetails from './reducers/getItemDetailsReducer'

const reducers = combineReducers({
	getList,
	getLookups,
	getItemDetails,
})
export const store = createStore(
	reducers,
	applyMiddleware(thunk as ThunkMiddleware)
)
