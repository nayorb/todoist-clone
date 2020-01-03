import React from 'react'
import MenuListHeader from '../menu-list/MenuListHeader'
import Item from '../items/Item'

function Section({ section, isOpened, toggleOpen, items }) {
	return (
		<div>
			<MenuListHeader
				onClick={toggleOpen}
				isOpened={isOpened}
				title={section.name}
			/>
			{items.map(item => (
				<Item key={item.id} item={item} />
			))}
		</div>
	)
}

export default Section
