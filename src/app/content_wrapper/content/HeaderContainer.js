import React from 'react'
import Header from '../../../components/header/Header'
import { useSelector } from 'react-redux'

const getTitle = item => {
	if (item.type === 'project') {
		return item.item.name
	}
	if (item.type === 'label') {
		return `@${item.item.name}`
	}
	if (item.type === 'filter') {
		return `${item.item.query.split(',')[0]}`
	}
}

function HeaderContainer() {
	const selectedItem = useSelector(state => state.app.selectedMenuItem)
	const title = getTitle(selectedItem)

	return <Header title={title} />
}

export default HeaderContainer
