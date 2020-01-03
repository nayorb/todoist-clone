import React from 'react'
import Item from '../../../../../components/items/Item'
import { useSelector } from 'react-redux'

function ItemContainer({ item }) {
	const labels = useSelector(state =>
		state.labels.filter(l => item.labels.includes(l.id))
	)
	return <Item item={item} labels={labels} />
}

export default ItemContainer
