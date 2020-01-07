import React from 'react'
import styled from 'styled-components'

export const StyledItemCount = styled.div`
  font-size: 12px;
  color: gray;
  margin-left: 10px;
  margin-top: 2px;
`

function ItemCount({ count }) {
  if (!count || count === 0) return null
  return <StyledItemCount>{count}</StyledItemCount>
}

export default ItemCount
