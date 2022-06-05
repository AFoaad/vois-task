/*
 *
 * Component: `AppRoutes`.
 *
 */
import { lazy, Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import { DETAILS_APP_NAME, BASE_APP_NAME } from '../constants/RoutesNames'

const LazyLoadedHomePage = lazy(
	() => import('../pages/Home' /* webpackChunkName: `pages.home-page` */)
)
const LazyLoadedDetailsPage = lazy(
	() => import('../pages/Details' /* webpackChunkName: `pages.details-page` */)
)

const AppRoutes = () => (
	<Suspense fallback={null}>
		<Switch>
			<Route exact path={BASE_APP_NAME}>
				<LazyLoadedHomePage />
			</Route>
			<Route exact path={`${DETAILS_APP_NAME}/:id`}>
				<LazyLoadedDetailsPage />
			</Route>
		</Switch>
	</Suspense>
)

export default AppRoutes
