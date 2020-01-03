import React from 'react'
import { useSelector } from 'react-redux'
import MenuList from '../../../../components/menu-list/MenuList'
import FilterItem from './FilterItem'

function Filters() {
	const filters = useSelector(state => state.filters)

	return (
		<MenuList
			items={filters}
			type='filter'
			header='Filters'
			renderItem={item => <FilterItem filter={item} />}
		/>
	)
}

export default Filters
