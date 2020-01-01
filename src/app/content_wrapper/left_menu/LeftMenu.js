import React from 'react'
import styled from 'styled-components'

import Projects from '../../../components/projects/Projects'
import COLORS from '../../../constants/colors'
import { useSelector } from 'react-redux'

const StyledMenu = styled.menu`
	user-select: none !important;
	width: 266px;
	height: calc(100vh - 10px);
	padding-top: 74px;
	padding-left: 32px;
	margin-left: -32px;
	position: fixed;
	overflow-x: hidden;
	/* overflow-y: hidden; */
	border-right: 1px solid #f1f1f1;
	background-color: ${COLORS.GREY_LIGHTEST};

	@media (max-width: 930px) {
		padding-left: 42px;
		margin-left: 0;
	}

	@media (max-width: 750px) {
		float: none;
		display: block;
		height: calc(100vh - 38px);
		position: fixed;
		left: -320px;
		padding: 0 0 0 32px;
		margin: 38px 0 0 0;
		z-index: 300;
		transition: left 300ms cubic-bezier(0.4, 0, 0.2, 1);
	}
`

function LeftMenu() {
	const isMenuOpened = useSelector(state => state.app.isMenuOpened)
	const isOpenedStyle = {
		left: '0',
		boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
	}

	return (
		<StyledMenu style={isMenuOpened ? isOpenedStyle : {}}>
			<Projects />
		</StyledMenu>
	)
}

export default LeftMenu
