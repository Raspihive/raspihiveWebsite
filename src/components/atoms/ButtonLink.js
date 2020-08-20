import React from 'react'
import styled from 'styled-components'

// 💫 M A I N   C O M P O N E N T
const Button = ({
  children, 
  href,
  target = '_blank',
  disabled = false,
  style
}) => {
  return (
    <StyledButtonLink
      href={href}
      target={target}
      className={`${disabled && 'disabled'}`}
      style={style}
    >
      {children}
    </StyledButtonLink>
  )
}

// 🎨 S T Y L E S
const StyledButtonLink = styled.a`
  display: inline-block;
  background-color: var(--primary);
  font-size: 16px;
  padding: 10px 20px;
  border-radius: 50px;
  color: var(--white);
  transition: var(--transition);
  font-weight: 800;
  border: 2px solid rgba(0,0,0,0.15);
  outline: none;
  text-decoration: none;
  cursor: pointer;
  
  &:hover {
    background-color: var(--primary-dark);
  }

  &.disabled {
    cursor: not-allowed;
    opacity: 0.25;
  }
`

export default Button
