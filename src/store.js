import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import projects from './reducers/projects'

import rootSaga from './sagas/index'

const sagaMiddleware = createSagaMiddleware()

export default createStore(
	combineReducers({
		projects,
	}),
	applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga)