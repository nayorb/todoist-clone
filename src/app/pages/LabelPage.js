import React from 'react'
import { useSelector } from 'react-redux'

import ItemsContainer from '../content_wrapper/content/todos/items/ItemsContainer'
import Header from '../../components/header/Header'

function LabelPage({ match }) {
  const labelId = parseInt(match.params.id)
  const label =
    useSelector(state => state.labels.find(l => l.id === labelId)) || {}

  const items = useSelector(state =>
    state.items.filter(i => i.labels.includes(labelId))
  )

  return (
    <>
      <Header title={`@${label.name}`} />
      <ItemsContainer items={items} showProject={true} />
    </>
  )
}

export default LabelPage
