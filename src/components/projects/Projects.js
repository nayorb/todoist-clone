import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const StyledList = styled.div`
	width: 265px;
	padding-bottom: 30px;
`

function Projects() {
	const projects = useSelector(state => state.projects)

	return (
		<StyledList>
			{projects.map(p => (
				<div key={p.id}>{p.name}</div>
			))}
		</StyledList>
	)
}

export default Projects
