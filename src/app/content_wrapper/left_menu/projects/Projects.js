import React from 'react'
import { useSelector } from 'react-redux'
import MenuList from '../../../../components/menu-list/MenuList'
import ProjectItem from './project-item/ProjectItem'

function Projects() {
	const projects = useSelector(state => state.projects)

	return (
		<MenuList
			items={projects}
			type='project'
			header='Projects'
			renderItem={item => <ProjectItem project={item} />}
		/>
	)
}

export default Projects
