/**
 *
 * Action: `getList`
 *
 */
import { Dispatch } from 'redux'
import { formatArrayOfObjectsBySchool } from '../../utilities/formatDataBySchool'
import { filterArrayWithMultiValue } from '../../utilities/filterArrayWithMultiValue'
import { GET_DATA, GET_DATA_STARTED } from '../../store/reducers/getListReducer'
import { dataOrderUsingSchool } from '../../utilities/dataOrderUsingSchool'
import { sortArrayByMonth } from '../../utilities/sortArrayBasedOnMonth'
import { QueryType } from '../../interfaces/query'

export const getList = (query: QueryType<string>) => {
	return async (dispatch: Dispatch) => {
		dispatch({
			type: GET_DATA_STARTED,
		})

		try {
			const response = await fetch(
				'https://raw.githubusercontent.com/abdelrhman-arnos/analysis-fe-challenge/master/data.json'
			)
			const result = await response.json()
			const filteredData = filterArrayWithMultiValue(result, query)
			const sortedData = sortArrayByMonth(filteredData)
			const reorderedDataToObjectOfArray = dataOrderUsingSchool(sortedData)
			const data = formatArrayOfObjectsBySchool(reorderedDataToObjectOfArray)

			dispatch({
				type: GET_DATA,
				payload: {
					data: data,
				},
			})
		} catch (error) {
			return false
		}
	}
}
