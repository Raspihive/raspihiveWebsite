import React from 'react'
import styled from 'styled-components'

const Section = ({children}) => {
  return (
    <StyledSection>
      {children}
    </StyledSection>
  )
}

const StyledSection = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

export default Section
