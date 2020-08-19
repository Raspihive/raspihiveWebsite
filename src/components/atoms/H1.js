import React from 'react'
import styled from 'styled-components'

const H1 = ({children}) => {
  return (
    <StyledH1>
      {children}
    </StyledH1>
  )
}

const StyledH1 = styled.div`
  font-size: 62px;
  font-weight: 800;
  margin-bottom: 15px;
`

export default H1
