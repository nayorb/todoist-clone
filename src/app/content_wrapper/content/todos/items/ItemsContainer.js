import React from 'react'

import ItemContainer from './ItemContainer'

function ItemsContainer({ items, showProject }) {
  console.log(items, showProject)
  return (
    <>
      {items &&
        items.map(item => (
          <ItemContainer key={item.id} item={item} showProject={showProject} />
        ))}
    </>
  )
}

export default ItemsContainer
