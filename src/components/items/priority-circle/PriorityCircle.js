import React from 'react'

import { getPriorityColors } from '../../../constants/colors'

import {
	StyledCheckboxSVG,
	StyledCircleContainer,
	StyledCircle,
} from './styles'

function PriorityCircle({ priority }) {
	return (
		<StyledCircleContainer>
			{priority ? (
				<StyledCircle priority={priority}>
					<StyledCheckboxSVG
						xmlns='http://www.w3.org/2000/svg'
						width='24'
						height='24'
					>
						<path
							fill={getPriorityColors(priority).border}
							d='M11.23 13.7l-2.15-2a.55.55 0 0 0-.74-.01l.03-.03a.46.46 0 0 0 0 .68L11.24 15l5.4-5.01a.45.45 0 0 0 0-.68l.02.03a.55.55 0 0 0-.73 0l-4.7 4.35z'
						></path>
					</StyledCheckboxSVG>
				</StyledCircle>
			) : null}
		</StyledCircleContainer>
	)
}

export default PriorityCircle
