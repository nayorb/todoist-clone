import styled from 'styled-components'

export const StyledProject = styled.div`
  display: flex;
  align-items: center;
  height: 20px;
`

export const StyledActions = styled.div`
  display: none;
`

export const StyledItemContainer = styled.div`
  page-break-inside: avoid;
  padding: 0 40px 0 0;
  font-size: 14px;
  position: relative;
  border-radius: 3px;
  overflow: visible;

  &:hover ${StyledActions} {
    display: block;
  }

  &:hover ${StyledProject} {
    display: none;
  }
`

export const StyledItemDetails = styled.div`
  display: flex;
  padding: 10px 0;
  font-size: 14px;
  border-bottom: 1px solid #f0f0f0;
  line-height: 21px;
  align-items: baseline;
`

export const StyledActionsContainer = styled.div`
  display: flex;
`
