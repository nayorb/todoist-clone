import React from 'react'
import { StyledActionContainer } from './styles'
import InfoIcon from './icons/InfoIcon'
import CalendarIcon from './icons/CalendarIcon'
import CommentsIcon from './icons/CommentsIcon'
import MoreIcon from './icons/MoreIcon'

function ItemActions() {
  return (
    <StyledActionContainer>
      <InfoIcon />
      <CalendarIcon />
      <CommentsIcon />
      <MoreIcon />
    </StyledActionContainer>
  )
}

export default ItemActions
