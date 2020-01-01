import React from 'react'
import { useDispatch } from 'react-redux'

import { initAppAction } from './actions/projects'
import './api'
import Projects from './components/projects/Projects'

function App() {
	const dispatch = useDispatch()
	dispatch(initAppAction())
	return <Projects />
}

export default App
