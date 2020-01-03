import React from 'react'
import { useSelector } from 'react-redux'
import SectionContainer from './SectionContainer'

function SectionListContainer({ projectId }) {
	const sections = useSelector(state =>
		state.sections.filter(s => s.project_id === projectId)
	)

	return (
		<>
			{sections.map(section => (
				<SectionContainer key={section.id} section={section} />
			))}
		</>
	)
}

export default SectionListContainer
