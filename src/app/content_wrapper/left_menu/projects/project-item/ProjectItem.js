import React from 'react'
import styled from 'styled-components'
import ProjectDot from '../../../../../components/projects/ProjectDot'

const StyledItem = styled.div`
  display: flex;
`

function ProjectItem({ project }) {
  return (
    <StyledItem>
      <ProjectDot project={project} indentElement={true} />
      {project.name}
    </StyledItem>
  )
}

export default ProjectItem
