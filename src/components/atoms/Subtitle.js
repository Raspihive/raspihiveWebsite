import React from 'react'
import styled from 'styled-components'

const Subtitle = ({children}) => {
  return (
    <StyledSubtitle>
      <p>{children}</p>
    </StyledSubtitle>
  )
}

const StyledSubtitle = styled.div`
  font-size: 20px;
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: 30px;
`

export default Subtitle
