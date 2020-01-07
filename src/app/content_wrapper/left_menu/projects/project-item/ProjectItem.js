import React from 'react'
import styled from 'styled-components'
import ProjectDot from '../../../../../components/projects/ProjectDot'
import ItemCount from '../../../../../components/items/ItemCount'

const StyledItem = styled.div`
  display: flex;
  align-items: center;
`

function ProjectItem({ project }) {
  return (
    <StyledItem>
      <ProjectDot project={project} indentElement={true} />
      {project.name}

      <ItemCount count={project.items.length} />
    </StyledItem>
  )
}

export default ProjectItem
