import React from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'

import COLORS from '../../constants/colors'
import { toggleMenuAction } from '../../actions/app'

const StyledMenuToggle = styled.a`
	display: none;
	padding: 5px 0;
	padding-right: 5px;
	color: ${COLORS.WHITE};
	box-sizing: border-box;

	@media (max-width: 750px) {
		display: flex;
		height: 100%;
		padding-left: 10px;
		position: absolute;
		align-items: center;
	}
`

const StyledSVG = styled.svg`
	padding: 2px;

	:hover {
		background-color: rgba(255, 255, 255, 0.2);
		border-radius: 3px;
	}
`

function LeftMenuToggle() {
	const dispatch = useDispatch()
	const isMenuOpened = useSelector(state => state.app.isMenuOpened)

	return (
		<div>
			<StyledMenuToggle>
				<StyledSVG
					onClick={() => dispatch(toggleMenuAction())}
					xmlns='http://www.w3.org/2000/svg'
					width='24'
					height='24'
					viewBox='0 0 24 24'
					data-svgs-path='sm1/menu.svg'
				>
					{isMenuOpened ? (
						<path
							fill='currentColor'
							d='M11.3 12L5 5.9A.5.5 0 1 1 6 5l6.1 6.2L18.1 5a.5.5 0 0 1 .8.8L12.7 12l6.2 6.1a.5.5 0 0 1-.8.8L12 12.7 5.9 19A.5.5 0 0 1 5 18l6.2-6.1z'
						></path>
					) : (
						<path
							fill='currentColor'
							d='M4.5 5h15a.5.5 0 1 1 0 1h-15a.5.5 0 0 1 0-1zm0 6h15a.5.5 0 1 1 0 1h-15a.5.5 0 1 1 0-1zm0 6h15a.5.5 0 1 1 0 1h-15a.5.5 0 1 1 0-1z'
						></path>
					)}
				</StyledSVG>
			</StyledMenuToggle>
		</div>
	)
}

export default LeftMenuToggle
