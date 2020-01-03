import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'

import { selectMenuItem } from '../../actions/app'
import MenuListHeader from './MenuListHeader'

const StyledList = styled(animated.ul)`
	width: 265px;
	padding: 0 !important;
	overflow: hidden;
	padding-bottom: 30px;
	margin: 0;
`

const StyledItem = styled.li`
	min-height: 24px;
	font-size: 14px;
	color: #333;
	list-style: none;
	cursor: pointer;
	padding: 5px 16px 5px 5px;
	transition: color 0.1s ease-in, background-color 0.1s ease-in;
	line-height: 1.25;
	display: flex;
	border-radius: 3px;
	align-items: center;

	:hover {
		background: #fff;
	}

	${({ selected }) =>
		selected &&
		`
    background: #fff;
    font-weight: bold;
  `}
`

function MenuList({ items, type, header, renderItem }) {
	const dispatch = useDispatch()
	const selectedItem = useSelector(state => state.app.selectedMenuItem)
	const [isHeaderOpened, setIsHeaderOpened] = useState(false)
	const height = items.length * 34

	const widthProps = useSpring({ height: isHeaderOpened ? height : 0 })

	return (
		<>
			<MenuListHeader
				isOpened={isHeaderOpened}
				onClick={() => setIsHeaderOpened(!isHeaderOpened)}
				title={header}
			/>
			<StyledList style={widthProps}>
				{items.map(item => (
					<StyledItem
						selected={selectedItem.type === type && selectedItem.id === item.id}
						key={item.id}
						onClick={() => dispatch(selectMenuItem(type, item.id, item))}
					>
						{renderItem && renderItem(item)}
					</StyledItem>
				))}
			</StyledList>
		</>
	)
}

export default MenuList
