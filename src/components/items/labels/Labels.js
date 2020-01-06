import React from 'react'
import styled from 'styled-components'
import { getItemColor } from '../../../constants/colors'
import { useHistory } from 'react-router-dom'

const StyledLabelsContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	margin-top: 4px;
`

const StyledLabel = styled.div`
	margin-right: 12px;
	font-size: 12px;
	cursor: pointer;

	:hover {
		text-decoration: underline;
	}

	${({ color }) => `color: ${getItemColor(color)};`}
`

function Labels({ labels = [] }) {
	const history = useHistory()
	return (
		<StyledLabelsContainer>
			{labels.map(label => (
				<StyledLabel
					key={label.id}
					color={label.color}
					onClick={() => history.push(`/label/${label.id}`)}
				>
					{label.name}
				</StyledLabel>
			))}
		</StyledLabelsContainer>
	)
}

export default Labels
