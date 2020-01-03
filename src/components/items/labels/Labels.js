import React from 'react'
import styled from 'styled-components'
import { getPriorityColors, getItemColor } from '../../../constants/colors'

const StyledLabelsContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	margin-top: 4px;
`

const StyledLabel = styled.div`
	margin-right: 12px;
	font-size: 12px;

	${({ color }) => `color: ${getItemColor(color)};`}
`

function Labels({ labels }) {
	return (
		<StyledLabelsContainer>
			{labels.map(label => (
				<StyledLabel color={label.color}>{label.name}</StyledLabel>
			))}
		</StyledLabelsContainer>
	)
}

export default Labels
