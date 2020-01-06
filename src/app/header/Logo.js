import React from 'react'

import styled from 'styled-components'

const StyledLogo = styled.div`
	float: left;
	padding-top: 7px;

	@media (max-width: 750px) {
		display: none;
	}
`

const StyledSVG = styled.svg`
	padding: 2px;
`

function Logo({ color = '#fff' }) {
	return (
		<StyledLogo>
			<StyledSVG
				xmlns='http://www.w3.org/2000/svg'
				width='24px'
				height='24px'
				viewBox='0 0 24 24'
			>
				<path
					fill={color}
					d='M21 0H3a3 3 0 0 0-3 3v3.7L4 9c.4.2.8.2 1.1 0l8-4.6a.8.8 0 0 1 .8 0l1 .5c.2.2.1.6 0 .7L5.1 11c-.4.3-.7.3-1.2 0L0 8.8v2l4 2.4c.4.2.8.2 1.1 0l8-4.6a.8.8 0 0 1 .8 0l1 .5c.2.1.1.5 0 .6l-9.7 5.6c-.4.2-.7.3-1.2 0A857 857 0 0 1 0 13v2l4 2.3c.4.2.8.2 1.1 0l8-4.6a.8.8 0 0 1 .8 0l1 .5c.2.2.1.6 0 .7l-9.7 5.5c-.4.3-.7.3-1.2 0a857 857 0 0 1-4-2.3v4A3 3 0 0 0 3 24h18a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3'
				></path>
			</StyledSVG>
		</StyledLogo>
	)
}

export default Logo