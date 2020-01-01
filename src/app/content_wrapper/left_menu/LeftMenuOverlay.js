import React from 'react'

import styled from 'styled-components'
import { useDispatch } from 'react-redux'

import { toggleMenuAction } from '../../../actions/app'

const StyledOverlay = styled.div`
	@media (max-width: 750px) {
		position: absolute;
		z-index: 200;
		top: 38px;
		width: 100%;
		height: 200%;
		background-color: rgba(102, 102, 102, 0.5);
	}
`

function LeftMenuOverlay() {
	const dispatch = useDispatch()

	return <StyledOverlay onClick={() => dispatch(toggleMenuAction())} />
}

export default LeftMenuOverlay
