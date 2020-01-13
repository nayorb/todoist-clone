import React, { useState } from 'react'

import styled from 'styled-components'
import SearchIcon from './SearchIcon'
import { useHistory } from 'react-router-dom'

const StyledQuickFind = styled.div`
  white-space: nowrap;
  margin-left: 292px;
  padding-top: 6px;

  @media (max-width: 750px) {
    margin-left: 40px;
    padding-top: 3px;
  }
`

const StyledInput = styled.input`
  border: 1px solid transparent !important;
  border-radius: 3px;
  padding: 5px;
  width: 300px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  outline: 0;
  color: #fff;
  padding-left: 30px;
  margin-top: 2px;
  background: 0;
  -webkit-transition: width 0.2s ease-in;
  transition: width 0.2s ease-in;

  :hover {
    background-color: rgba(255, 255, 255, 0.2);
  }

  :focus {
    z-index: 10;
    position: relative;
    background-color: #fff !important;
    border: 1px solid #eee !important;
    color: #202020 !important;
    width: calc(100% - 8px) !important;
  }

  @media (max-width: 870px) {
    width: 160px;
  }
  @media (max-width: 750px) {
    width: 40%;
    padding-left: 6px;
    padding-top: 5px;
    padding-bottom: 5px;
  }
`

function QuickFind() {
  const [focused, setFocused] = useState(false)
  const [search, setSearch] = useState('')
  const history = useHistory()
  return (
    <StyledQuickFind>
      <div>
        <SearchIcon focused={focused} />
        <form
          onSubmit={e => {
            e.preventDefault()
            history.push(`/search/${search}`)
            setSearch('')
          }}
        >
          <StyledInput
            type="text text_box"
            placeholder="Quick Find"
            autocomplete="off"
            autocorrect="off"
            spellcheck="false"
            value={search}
            onChange={e => setSearch(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
          />
        </form>
      </div>
    </StyledQuickFind>
  )
}

export default QuickFind
