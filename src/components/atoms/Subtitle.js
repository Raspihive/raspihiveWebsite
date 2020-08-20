import React from 'react'
import styled from 'styled-components'

// M A I N   C O M P O N E N T
const Subtitle = ({children}) => {
  return (
    <StyledSubtitle>
      <p>{children}</p>
    </StyledSubtitle>
  )
}

// S T Y L E S
const StyledSubtitle = styled.div`
  font-size: 20px;
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: 30px;
`

export default Subtitle
