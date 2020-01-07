import React from 'react'

import styled from 'styled-components'
import PriorityCircle from './priority-circle/PriorityCircle'
import Labels from './labels/Labels'
import ProjectDot from '../projects/ProjectDot'
import { useHistory } from 'react-router-dom'

const StyledItemContainer = styled.div`
  page-break-inside: avoid;
  padding: 0 6px 0 0;
  font-size: 14px;
  position: relative;
  border-radius: 3px;
`

const StyledItemDetails = styled.div`
  display: flex;
  padding: 10px 0;
  font-size: 14px;
  border-bottom: 1px solid #f0f0f0;
  line-height: 21px;
  align-items: baseline;
`
const StyledItemActions = styled.div`
  display: flex;
  align-items: center;
  height: 20px;
`

function Item({ item, labels, project }) {
  const history = useHistory()
  return (
    <StyledItemContainer>
      <StyledItemDetails>
        <PriorityCircle priority={item.priority} />
        <div style={{ flex: 1 }}>
          <div>{item.content}</div>
          <Labels labels={labels} />
        </div>
        <StyledItemActions>
          {project ? (
            <>
              <div
                style={{ marginRight: '5px', cursor: 'pointer' }}
                onClick={() => history.push(`/project/${project.id}`)}
              >
                {project.name}
              </div>
              <ProjectDot project={project} />
            </>
          ) : null}
        </StyledItemActions>
      </StyledItemDetails>
    </StyledItemContainer>
  )
}

export default Item
