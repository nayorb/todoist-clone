import React from 'react'
import Item from '../../../../../components/items/Item'
import { useSelector } from 'react-redux'

function ItemContainer({ item, showProject }) {
  const labels = useSelector(state =>
    state.labels.filter(l => (item.labels ? item.labels.includes(l.id) : false))
  )
  const project = useSelector(state =>
    state.projects.find(p => p.id === item.project_id)
  )
  return (
    <Item item={item} labels={labels} project={showProject ? project : null} />
  )
}

export default ItemContainer
