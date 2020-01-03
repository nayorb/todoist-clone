import React, { useState } from 'react'
import Section from '../../../../../components/sections/Section'
import { useSelector } from 'react-redux'

function SectionContainer({ section }) {
	const [isOpened, setIsOpened] = useState(true)
	const items = useSelector(state =>
		state.items.filter(i => i.section_id === section.id)
	)
	return (
		<Section
			section={section}
			isOpened={isOpened}
			toggleOpen={() => setIsOpened(!isOpened)}
			items={items}
		/>
	)
}

export default SectionContainer
