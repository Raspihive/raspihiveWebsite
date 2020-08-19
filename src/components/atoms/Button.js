import React from 'react'
import styled from 'styled-components'

const Button = ({children, onClick}) => {
  return (
    <StyledButton 
      onClick={onClick}
      // linkTo={linkTo}
      disabled
    >
      {children}
    </StyledButton>
  )
}

const StyledButton = styled.button`
  background-color: var(--primary);
  font-size: 16px;
  padding: 10px 20px;
  border-radius: 50px;
  color: var(--white);
  transition: var(--transition);
  font-weight: 800;
  border: 2px solid rgba(0,0,0,0.25);
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: var(--primary-dark);
  }
`

export default Button
