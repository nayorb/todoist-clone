import React from 'react'

import styled from 'styled-components'
import LeftMenu from './left_menu/LeftMenu'
import Content from './content/Content'

const StyledWrapper = styled.div`
	width: 922px;

	@media (max-width: 930px) {
		width: 100%;
	}
`

function ContentWrapper() {
	return (
		<StyledWrapper>
			<LeftMenu />
			<Content />
		</StyledWrapper>
	)
}

export default ContentWrapper
