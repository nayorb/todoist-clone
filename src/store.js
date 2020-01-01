import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import app from './reducers/app'
import filters from './reducers/filters'
import labels from './reducers/labels'
import projects from './reducers/projects'

import rootSaga from './sagas/index'

const sagaMiddleware = createSagaMiddleware()

export default createStore(
	combineReducers({
		projects,
		filters,
		labels,
		app,
	}),
	applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga)
