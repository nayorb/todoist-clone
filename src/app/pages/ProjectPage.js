import React from 'react'
import { useSelector } from 'react-redux'
import ItemsContainer from '../content_wrapper/content/todos/items/ItemsContainer'

import SectionListContainer from '../content_wrapper/content/todos/sections/SectionListContainer'
import Header from '../../components/header/Header'

function ProjectPage({ match }) {
  const projectId = parseInt(match.params.id)

  const project =
    useSelector(state => state.projects.find(p => p.id === projectId)) || {}
  console.log(project.items)

  return (
    <>
      <Header title={project.name} />
      <ItemsContainer items={project.items} />
      <SectionListContainer projectId={projectId} />
    </>
  )
}

export default ProjectPage
