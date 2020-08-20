import React from 'react'
import styled from 'styled-components'

// 💫 M A I N   C O M P O N E N T
const Row = ({children}) => {
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
  margin: 0 -30px;
  flex-wrap: nowrap;
  
  @media (max-width: 900px) {
    flex-wrap: wrap;
  }
`

export default Row
