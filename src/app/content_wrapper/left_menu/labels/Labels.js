import React from 'react'
import { useSelector } from 'react-redux'
import MenuList from '../../../../components/menu-list/MenuList'
import LabelItem from './LabelItem'

function Labels() {
	const labels = useSelector(state => state.labels)

	return (
		<MenuList
			items={labels}
			type='label'
			header='Labels'
			renderItem={item => <LabelItem label={item} />}
		/>
	)
}

export default Labels
