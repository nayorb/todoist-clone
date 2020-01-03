import React from 'react'

import styled from 'styled-components'
import PriorityCircle from './priority-circle/PriorityCircle'
import Labels from './labels/Labels'

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
`

function Item({ item, labels }) {
	return (
		<StyledItemContainer>
			<StyledItemDetails>
				<PriorityCircle priority={item.priority} />
				<div>
					<div>{item.content}</div>
					<Labels labels={labels} />
				</div>
			</StyledItemDetails>
		</StyledItemContainer>
	)
}

export default Item
