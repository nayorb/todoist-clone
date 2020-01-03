import styled from 'styled-components'
import { getPriorityColors } from '../../../constants/colors'

export const getPriorityColorsCSS = priority => {
	const colors = getPriorityColors(priority)
	return `
    background-color: ${colors.background};
    border-color: ${colors.border};
  `
}

export const StyledCircleContainer = styled.div`
	padding-right: 1em;
	padding-top: 2px;
`
export const StyledCheckboxSVG = styled.svg`
	border: 1px solid transparent;
	display: inline-block;
	height: 16px;
	opacity: 0;
	transition: opacity 150ms ease-in;
	width: 16px;
	margin-left: -8px;
	margin-top: -8px;
	pointer-events: none;
`

export const StyledCircle = styled.div`
	width: 16px;
	height: 16px;
	cursor: pointer;
	color: #404040;
	user-select: none;
	text-align: center;
	line-height: 16px;
	border: 1px solid #808080;
	border-radius: 16px;
	display: flex;
	align-items: center;
	justify-content: center;
	background-size: 2px 2px;
	background-repeat: no-repeat;
	background-position: center center;
	background-color: transparent;
  transition: background-color 150ms ease-in;
  
  ${({ priority }) => getPriorityColorsCSS(priority)}

	${({ priority }) => {
		switch (priority) {
			case 4:
			case 3:
			case 2:
				return `
          border-width: 2px;
          width: 14px;
          height: 14px;
        `
			default:
				return ''
		}
	}}
  
  &:hover ${StyledCheckboxSVG} {
    opacity: 1;
  }
`
