import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import { initAppAction } from './actions/app'
import './api'
import Header from './app/header/Header'
import ContentWrapper from './app/content_wrapper/ContentWrapper'
import COLORS from './constants/colors'

import styled from 'styled-components'
import LeftMenuOverlay from './app/content_wrapper/left_menu/LeftMenuOverlay'

const AppHolder = styled.div`
	display: flex;
	min-height: 100vh;
	margin-right: 0;
	justify-content: center;
	background-color: ${COLORS.GREY_LIGHTEST};
	margin-left: calc(100vw - 100%);
`

function App() {
	const isMenuOpened = useSelector(state => state.app.isMenuOpened)
	const dispatch = useDispatch()
	dispatch(initAppAction())
	return (
		<Router>
			<AppHolder>
				<Header />
				<ContentWrapper />

				{isMenuOpened ? <LeftMenuOverlay /> : null}
			</AppHolder>
		</Router>
	)
}

export default App
