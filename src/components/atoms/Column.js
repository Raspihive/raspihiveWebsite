import React from 'react'
import styled from 'styled-components'

const Column = ({children, center}) => {
  return (
    <StyledColumn className={center && 'center'}>
      {children}
    </StyledColumn>
  )
}

const StyledColumn = styled.div`
  width: calc(50% - 30px);
  margin: 0 30px 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  &.center {
    justify-content: center;
  }
`

export default Column
