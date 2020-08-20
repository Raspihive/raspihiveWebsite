import React from 'react'
import styled from 'styled-components'

// M A I N   C O M P O N E N T
const Section = ({children}) => {
  return (
    <StyledSection>
      {children}
    </StyledSection>
  )
}

// S T Y L E S
const StyledSection = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

export default Section
