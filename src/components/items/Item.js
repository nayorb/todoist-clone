import React from 'react'

import PriorityCircle from './priority-circle/PriorityCircle'
import Labels from './labels/Labels'
import ProjectDot from '../projects/ProjectDot'
import { useHistory } from 'react-router-dom'
import {
  StyledItemContainer,
  StyledItemDetails,
  StyledActionsContainer,
  StyledActions,
  StyledProject,
} from './styles'
import ItemActions from './actions/ItemActions'

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
        <StyledActionsContainer>
          <StyledActions>
            <ItemActions />
          </StyledActions>
          {project ? (
            <StyledProject>
              <div
                style={{ marginRight: '5px', cursor: 'pointer' }}
                onClick={() => history.push(`/project/${project.id}`)}
              >
                {project.name}
              </div>
              <ProjectDot project={project} />
            </StyledProject>
          ) : null}
        </StyledActionsContainer>
      </StyledItemDetails>
    </StyledItemContainer>
  )
}

export default Item
