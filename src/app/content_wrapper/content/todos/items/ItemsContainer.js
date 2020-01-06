import React from 'react'

import ItemContainer from './ItemContainer'

function ItemsContainer({ items }) {
	console.log(items)
	return (
		<>
			{items && items.map(item => <ItemContainer key={item.id} item={item} />)}
		</>
	)
}

export default ItemsContainer
