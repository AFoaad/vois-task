import './main.css'
import { FC } from 'react'
import { Route, BrowserRouter } from 'react-router-dom'
import { QueryParamProvider } from 'use-query-params'
import { Provider } from 'react-redux'
import { store } from './store'
import AppRoutes from './routes'

const App: FC = (): JSX.Element => (
	<BrowserRouter>
		<Provider store={store}>
			<QueryParamProvider ReactRouterRoute={Route}>
				<AppRoutes />
			</QueryParamProvider>
		</Provider>
	</BrowserRouter>
)
export default App
