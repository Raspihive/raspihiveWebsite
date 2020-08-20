import React from 'react'
import styled from 'styled-components'

// M A I N   C O M P O N E N T
const Img = ({children, src}) => {
  return (
    <StyledImg src={src}>
      {children}
    </StyledImg>
  )
}

// S T Y L E S
const StyledImg = styled.img`
  height: auto;
  width: 500px;
  border-radius: var(--radius);
  background-color: var(--light-50);

  @media (max-width: 900px) {
    width: 100%;
  }
`

export default Img
