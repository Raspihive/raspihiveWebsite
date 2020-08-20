import React from 'react'
import styled from 'styled-components'

// 💫 M A I N   C O M P O N E N T
const H2 = ({
  children, 
  color = 'var(--black)'
}) => {
  return (
    <StyledH2 style={{color: color}}>
      {children}
    </StyledH2>
  )
}

// 🎨 S T Y L E S
const StyledH2 = styled.div`
  font-size: 42px;
  font-weight: 800;
  margin-bottom: 10px;
`

export default H2
