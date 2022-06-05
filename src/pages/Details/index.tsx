/*
 *
 * Page: `DetailsPage`.
 *
 */
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getItemDetails } from '../../store/actions/getItemDetails'
import { ITEM_DETAILS_RESET } from '../../store/reducers/getItemDetailsReducer'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { useAppSelector } from '../../hooks/useAppSelector'

type PageParamsType = { id: string }

const DetailsPage = () => {
	const { id } = useParams() as PageParamsType
	const dispatch = useAppDispatch()
	const { item } = useAppSelector(({ getItemDetails }) => getItemDetails)

	useEffect(() => {
		dispatch(getItemDetails(id))

		return () => {
			dispatch({
				type: ITEM_DETAILS_RESET,
			})
		}
	}, [])

	return (
		<div className="p-10">
			<h3 className="text-2xl to-gray-700">School: {item.school}</h3>
			<h3 className="text-2xl to-gray-700">lessons: {item.lessons}</h3>
			<h3 className="text-2xl to-gray-700">Camp: {item.camp}</h3>
			<h3 className="text-2xl to-gray-700">Country: {item.country}</h3>
		</div>
	)
}

export default DetailsPage
