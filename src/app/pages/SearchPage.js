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

function SearchPage({ match }) {
  const query = match.params.query
  const app = useSelector(state => state.app.app)

  const conditions = useSelector(state =>
    app.getFilterItems(state.items, query)
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

export default SearchPage
