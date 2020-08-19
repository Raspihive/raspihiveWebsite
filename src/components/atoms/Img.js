import React from 'react'
import styled from 'styled-components'

const Img = ({children, src}) => {
  return (
    <StyledImg src={src}>
      {children}
    </StyledImg>
  )
}

const StyledImg = styled.img`
  height: auto;
  width: 500px;
  border-radius: var(--radius);
  background-color: var(--light-50);
`

export default Img
