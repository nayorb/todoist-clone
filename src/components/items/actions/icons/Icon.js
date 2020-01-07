import React from 'react'

import styled from 'styled-components'

const StyledIconContainer = styled.div`
  margin-left: 10px;
`
const StyledSvgContainer = styled.div`
  cursor: pointer !important;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    color: #202020 !important;
    background-color: #eee;
    border-radius: 3px;
  }
`

function Icon({ children, width = 24, height = 24 }) {
  return (
    <StyledIconContainer>
      <StyledSvgContainer>
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height}>
          {children}
        </svg>
      </StyledSvgContainer>
    </StyledIconContainer>
  )
}

export default Icon
