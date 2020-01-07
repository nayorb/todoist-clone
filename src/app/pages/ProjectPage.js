import React from 'react'
import { useSelector } from 'react-redux'
import ItemsContainer from '../content_wrapper/content/todos/items/ItemsContainer'

import SectionListContainer from '../content_wrapper/content/todos/sections/SectionListContainer'
import Header from '../../components/header/Header'

function ProjectPage({ match }) {
  const projectId = parseInt(match.params.id)

  const project =
    useSelector(state => state.projects.find(p => p.id === projectId)) || {}
  const items = useSelector(state =>
    state.items.filter(i => i.project_id === projectId && i.section_id === null)
  )
  console.log(items)

  return (
    <>
      <Header title={project.name} />
      <ItemsContainer items={items} />
      <SectionListContainer projectId={projectId} />
    </>
  )
}

export default ProjectPage
