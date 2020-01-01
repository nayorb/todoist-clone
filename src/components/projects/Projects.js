import React from 'react'

import { useSelector } from 'react-redux'

function Projects() {
	const projects = useSelector(state => state.projects.projects)

	return (
		<div>
			{projects.map(p => (
				<div key={p.id}>{p.name}</div>
			))}
		</div>
	)
}

export default Projects
