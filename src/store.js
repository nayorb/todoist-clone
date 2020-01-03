import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import app from './reducers/app'
import filters from './reducers/filters'
import labels from './reducers/labels'
import projects from './reducers/projects'
import sections from './reducers/sections'
import items from './reducers/items'

import rootSaga from './sagas/index'

const sagaMiddleware = createSagaMiddleware()

export default createStore(
	combineReducers({
		sections,
		projects,
		filters,
		labels,
		app,
		items,
	}),
	applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga)
