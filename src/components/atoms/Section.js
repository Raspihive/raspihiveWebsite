import React from 'react'
import styled from 'styled-components'

const Section = ({children, ref}) => {
  return (
    <StyledSection >
      <div className="test" ref={ref}></div>
      {children}
    </StyledSection>
  )
}

const StyledSection = styled.div`
  padding: 150px 0;
`

export default Section
