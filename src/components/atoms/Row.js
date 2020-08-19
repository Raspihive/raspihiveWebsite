import React from 'react'
import styled from 'styled-components'

const Row = ({children}) => {
  return (
    <StyledRow>
      {children}
    </StyledRow>
  )
}

const StyledRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 -30px;
  
`

export default Row
