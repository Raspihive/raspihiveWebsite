import React from 'react'
import styled from 'styled-components'

// 💫 M A I N   C O M P O N E N T
const Button = ({
  children, 
  onClick,
  disabled = false
}) => {


  return (
    <StyledButton 
      onClick={onClick}
      className={`${disabled && 'disabled'}`}
    >
      {children}
    </StyledButton>
  )
}

// 🎨 S T Y L E S
const StyledButton = styled.button`
  background-color: var(--primary);
  font-size: 16px;
  padding: 10px 20px;
  border-radius: 50px;
  color: var(--white);
  transition: var(--transition);
  font-weight: 800;
  border: 2px solid rgba(0,0,0,0.15);
  outline: none;
  cursor: pointer;
  
  a {
    color: var(--white);
    text-decoration: none;
    outline: none;
  }
  
  &:hover {
    background-color: var(--primary-dark);
  }

  &.disabled {
    cursor: not-allowed;
    opacity: 0.25;
  }
`

export default Button
