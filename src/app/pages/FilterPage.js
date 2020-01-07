import React from 'react'
import { useSelector } from 'react-redux'

import ItemsContainer from '../content_wrapper/content/todos/items/ItemsContainer'
import Header from '../../components/header/Header'

const ConditionObject = ({ condition }) => {
  console.log(condition)
  return (
    <>
      <Header title={condition.query} />
      <ItemsContainer items={condition.items} showProject={true} />
    </>
  )
}

function FilterPage({ match }) {
  const filterId = parseInt(match.params.id)
  const app = useSelector(state => state.app.app)

  const filter = useSelector(state =>
    state.filters.find(f => f.id === filterId)
  )
  const conditions = useSelector(state =>
    filter ? app.getFilterItems(state.items, filter) : []
  )

  console.log(conditions)

  return (
    <>
      {conditions.map(condition => (
        <ConditionObject condition={condition} key={condition.query} />
      ))}
    </>
  )
}

export default FilterPage
