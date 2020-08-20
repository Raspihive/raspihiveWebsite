import React from 'react'
import styled from 'styled-components'

// 💫 M A I N   C O M P O N E N T
const Column = ({children, center}) => {
  return (
    <StyledColumn className={center && 'center'}>
      {children}
    </StyledColumn>
  )
}

// 🎨 S T Y L E S
const StyledColumn = styled.div`
  width: calc(50% - 30px);
  margin: 0 30px 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  &.center {
    justify-content: center;
  }

  @media (max-width: 900px) {
    width: 100%;
  }
`

export default Column
