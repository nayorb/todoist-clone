import React from 'react'
import styled from 'styled-components'

import COLORS from '../../constants/colors'
import Logo from './Logo'
import LeftMenuToggle from './LeftMenuToggle'

const StyledHeader = styled.header`
	background-color: ${COLORS.BLACK};
	color: ${COLORS.WHITE};
	position: fixed;
	height: 44px;
	display: flex;
	align-items: center;
	justify-content: center;
	box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
	width: 100vw;
	z-index: 1;
	top: 0;

	@media (max-width: 750px) {
		min-width: 350px;
		height: 38px;
		padding-right: 0;
		padding-left: 0;
	}
`

const StyledInnerHeader = styled.div`
	width: 922px;
	height: 100%;
	padding-left: 13px;
	position: relative;

	@media (max-width: 930px) {
		width: 100%;
		padding-left: 48px;
	}

	@media (max-width: 750px) {
		padding: 0;
	}
`

function Header() {
	return (
		<StyledHeader>
			<StyledInnerHeader>
				<LeftMenuToggle />
				<Logo />
			</StyledInnerHeader>
		</StyledHeader>
	)
}

export default Header
