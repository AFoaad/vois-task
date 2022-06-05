/**
 *
 * Page: `Home`
 *
 */
import { useCallback, useEffect, useMemo, useState } from 'react'
import { StringParam, useQueryParams } from 'use-query-params'
import { shallowEqual } from 'react-redux'
import Select from '../../components/Select'
import { getList } from '../../store/actions/getList'
import { getLookups } from '../../store/actions/getLookups'
import { useAppSelector } from '../../hooks/useAppSelector'
import { useAppDispatch } from '../../hooks/useAppDispatch'

import Chart from './components/Chart'
import Lessons from './components/Lessons'
import Loading from '../../components/Loading'
import Header from '../../components/Header'

const initialQueryValues = {
	camp: 'Omaka',
	country: 'Egypt',
	school: 'All',
}

const HomePage = () => {
	const dispatch = useAppDispatch()

	const [query = initialQueryValues, setQuery] = useQueryParams({
		country: StringParam,
		camp: StringParam,
		school: StringParam,
	})

	const { lookupsLists } = useAppSelector((state) => state.getLookups)
	const { loading } = useAppSelector((state) => state.getList, shallowEqual)

	useEffect(() => {
		setQuery(initialQueryValues)
		dispatch(getLookups())
	}, [])

	useEffect(() => {
		setSelectedSchools([])
		dispatch(getList(query))
	}, [query])

	const onSelectChange = useCallback(
		(e: React.ChangeEvent<HTMLSelectElement>) => {
			setQuery({ [e.target.name]: e.target.value })
		},
		[setQuery]
	)

	const [selectedSchools, setSelectedSchools] = useState<string[]>([])

	const renderChartData = useMemo(() => {
		if (loading) {
			return <Loading />
		}

		return (
			<div className="w-full h-auto my-10 flex flex-row bg-white dark:bg-gray-900">
				<Chart selectedSchools={selectedSchools} />
				<Lessons
					country={query?.country}
					selectedSchools={selectedSchools}
					setSelectedSchools={setSelectedSchools}
				/>
			</div>
		)
	}, [loading, query, selectedSchools, setSelectedSchools])

	return (
		<div className="w-full h-full max-h-full py-14 bg-gray-200 dark:bg-gray-900">
			<Header />
			<div className="container mx-auto">
				<header className="py-10">
					<h1 className="text-3xl font-bold text-burble-700 dark:text-white">
						Analysis Chart
					</h1>
					<h3 className="text-2xl py-5 text-burble-700 dark:text-white">
						Number of lessons
					</h3>
				</header>
				<section>
					<div className="flex flex-row justify-between">
						<Select
							title="Select Country"
							data={lookupsLists.countries}
							onChange={onSelectChange}
							name="country"
							value={query?.country as string}
						/>
						<Select
							title="Select Camp"
							name="camp"
							data={lookupsLists.camps}
							onChange={onSelectChange}
							value={query.camp as string}
						/>
						<Select
							title="Select School"
							name="school"
							data={lookupsLists.schools}
							onChange={onSelectChange}
							value={query.school as string}
						/>
					</div>
				</section>
				{renderChartData}
			</div>
		</div>
	)
}

export default HomePage
