import React from 'react'

import styled from 'styled-components'

const StyledHeader = styled.header`
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	margin-bottom: 8px;
	word-break: break-word;
	padding-right: 40px;
`

const Title = styled.h1`
	display: inline-block;
	font-size: 20px;
	font-weight: 600;
	line-height: 25px;
	padding: 0;
	margin: 0;
`

function Header({ title }) {
	return (
		<StyledHeader>
			<Title>{title}</Title>
		</StyledHeader>
	)
}

export default Header
