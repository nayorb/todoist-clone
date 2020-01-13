import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { StyledContent, Editor } from './styles'
import ProjectPage from '../../pages/ProjectPage'
import LabelPage from '../../pages/LabelPage'
import FilterPage from '../../pages/FilterPage'
import SearchPage from '../../pages/SearchPage'

function Content() {
  return (
    <StyledContent>
      <Editor>
        <Switch>
          <Route path="/project/:id" component={ProjectPage} />
          <Route path="/label/:id" component={LabelPage} />
          <Route path="/filter/:id" component={FilterPage} />
          <Route path="/search/:query" component={SearchPage} />
        </Switch>
      </Editor>
      <div>
        Icons made by{' '}
        <a
          href="https://www.flaticon.com/authors/those-icons"
          title="Those Icons"
        >
          Those Icons
        </a>{' '}
        from{' '}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
    </StyledContent>
  )
}

export default Content
