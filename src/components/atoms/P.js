import React from 'react'
import styled from 'styled-components'

// 💫 M A I N   C O M P O N E N T
const P = ({children}) => {
  return (
    <StyledP>
      {children}
    </StyledP>
  )
}

// 🎨 S T Y L E S
const StyledP = styled.div`
  font-size: 16px;
  margin-bottom: 15px;
  line-height: 1.5;
`

export default P
