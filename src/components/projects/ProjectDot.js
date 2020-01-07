import React from 'react'
import styled from 'styled-components'

import { getItemColor } from '../../constants/colors'

const StyledDotContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 10px;
`
const StyledDot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 9999px;
  margin-right: 10px;
  ${({ color }) => `background-color: ${color};`}
  ${({ indent }) => `margin-left: ${indent * 25}px;`}
`

function ProjectDot({ project, indentElement }) {
  const indent =
    project.subProjectsChain && indentElement
      ? project.subProjectsChain.length
      : 1
  return (
    <StyledDotContainer>
      <StyledDot color={getItemColor(project.color)} indent={indent - 1} />
    </StyledDotContainer>
  )
}

export default ProjectDot
