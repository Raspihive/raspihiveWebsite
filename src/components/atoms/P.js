import React from 'react'
import styled from 'styled-components'

const P = ({children}) => {
  return (
    <StyledP>
      {children}
    </StyledP>
  )
}

const StyledP = styled.div`
  font-size: 16px;
  margin-bottom: 15px;
`

export default P
