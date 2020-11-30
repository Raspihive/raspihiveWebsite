import React from 'react'
import styled from 'styled-components'

// 💫 M A I N   C O M P O N E N T
const FooterRow = ({children}) => {
  return (
    <StyledRow>
      {children}
    </StyledRow>
  )
}

// 🎨 S T Y L E S
const StyledRow = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  
  @media (max-width: 900px) {
    flex-wrap: wrap;
  }
  @media (max-width: 1000px) {
    flex-direction: column;
  }
  
`

export default FooterRow
