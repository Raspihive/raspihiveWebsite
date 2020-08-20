import React from 'react'
import styled from 'styled-components'

// 💫 M A I N   C O M P O N E N T
const Section = ({children, ref}) => {
  return (
    <StyledSection >
      <div className="test" ref={ref}></div>
      {children}
    </StyledSection>
  )
}

// 🎨 S T Y L E S
const StyledSection = styled.div`
  padding: 150px 0;
`

export default Section
