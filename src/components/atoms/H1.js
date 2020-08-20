import React from 'react'
import styled from 'styled-components'

// 💫 M A I N   C O M P O N E N T
const H1 = ({
  children, 
  color = 'var(--black)'
}) => {
  return (
    <StyledH1 style={{color: color}}>
      {children}
    </StyledH1>
  )
}

// 🎨 S T Y L E S
const StyledH1 = styled.div`
  font-size: 62px;
  font-weight: 800;
  margin-bottom: 15px;
`

export default H1
