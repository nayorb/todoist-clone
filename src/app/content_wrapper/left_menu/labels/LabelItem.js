import React from 'react'
import styled from 'styled-components'

import { getItemColor } from '../../../../constants/colors'
import ItemCount from '../../../../components/items/ItemCount'

const StyledItem = styled.div`
  display: flex;
`
const StyledDotContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 34px;
`

function LabelItem({ label }) {
  return (
    <StyledItem>
      <StyledDotContainer>
        <svg width="24" height="24" viewBox="0 0 24 24">
          <path
            fill={getItemColor(label.color)}
            d="M5.914 11.086l4.5-4.5A2 2 0 0 1 11.828 6H16a2 2 0 0 1 2 2v4.172a2 2 0 0 1-.586 1.414l-4.5 4.5a2 2 0 0 1-2.828 0l-4.172-4.172a2 2 0 0 1 0-2.828zM14 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
          ></path>
        </svg>
      </StyledDotContainer>
      {label.name}
      <ItemCount count={label.items.length} />
    </StyledItem>
  )
}

export default LabelItem
