import React from 'react'
import { useSelector } from 'react-redux'
import SectionListContainer from '../sections/SectionListContainer'
import ItemContainer from './ItemContainer'

const getSelectorFunction = (type, item) => {
	switch (type) {
		case 'project':
			return state =>
				state.items.filter(
					i => i.project_id === item.id && i.section_id === null
				)
		default:
			return state => []
	}
}

function ItemsContainer() {
	const selectedItem = useSelector(state => state.app.selectedMenuItem)
	const isProject = selectedItem.type === 'project'
	const items = useSelector(
		getSelectorFunction(selectedItem.type, selectedItem.item)
	)

	return (
		<>
			{items.map(item => (
				<ItemContainer key={item.id} item={item} />
			))}
			{isProject ? <SectionListContainer projectId={selectedItem.id} /> : null}
		</>
	)
}

export default ItemsContainer
