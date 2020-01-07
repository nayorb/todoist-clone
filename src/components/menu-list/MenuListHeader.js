import React from 'react'
import { useSpring, animated } from 'react-spring'
import styled from 'styled-components'

const StyledHeader = styled.div`
  padding: 1px 0;
  position: relative;
  display: flex;
  font-size: 14px;
  font-weight: 600;
  line-height: 1em;
  cursor: pointer;
  background-color: transparent;
  padding: 10px 0;
  :hover {
    background-color: #f7f7f7;
  }
  ${({ isOpened }) => (isOpened ? 'border-bottom: 1px solid #f1f1f1;' : '')}
`

const StyledIconContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 38px;
`

function MenuListHeader({ onClick, isOpened, title }) {
  const { rotate } = useSpring({
    rotate: isOpened ? 0 : -90,
  })

  return (
    <StyledHeader onClick={onClick} isOpened={isOpened}>
      <StyledIconContainer>
        <animated.svg
          width="16px"
          height="16px"
          viewBox="0 0 16 16"
          style={{ transform: rotate.interpolate(val => `rotate(${val}deg)`) }}
        >
          <g transform="translate(-266, -17)" fill="#777777">
            <path d="M280,22.7581818 L279.1564,22 L273.9922,26.506 L273.4414,26.0254545 L273.4444,26.0281818 L268.8562,22.0245455 L268,22.7712727 C269.2678,23.878 272.8084,26.9674545 273.9922,28 C274.8718,27.2330909 274.0144,27.9809091 280,22.7581818"></path>
          </g>
        </animated.svg>
      </StyledIconContainer>
      <div>{title}</div>
    </StyledHeader>
  )
}

export default MenuListHeader
