import React from 'react'
import styled from 'styled-components'

import { getItemColor } from '../../../../../constants/colors'

const StyledItem = styled.div`
	display: flex;
`
const StyledDotContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	min-width: 34px;
`
const StyledDot = styled.div`
	width: 10px;
	height: 10px;
	border-radius: 9999px;
	${({ color }) => `background-color: ${color};`}
`

function ProjectItem({ project }) {
	return (
		<StyledItem>
			<StyledDotContainer>
				<StyledDot color={getItemColor(project.color)} paddingLeft={10} />
			</StyledDotContainer>
			{project.name}
		</StyledItem>
	)
}

export default ProjectItem
