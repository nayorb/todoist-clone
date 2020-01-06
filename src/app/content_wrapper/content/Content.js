import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { StyledContent, Editor } from './styles'
import ProjectPage from '../../pages/ProjectPage'
import LabelPage from '../../pages/LabelPage'
import FilterPage from '../../pages/FilterPage'

function Content() {
	return (
		<StyledContent>
			<Editor>
				<Switch>
					<Route path='/project/:id' component={ProjectPage} />
					<Route path='/label/:id' component={LabelPage} />
					<Route path='/filter/:id' component={FilterPage} />
				</Switch>
			</Editor>
		</StyledContent>
	)
}

export default Content
