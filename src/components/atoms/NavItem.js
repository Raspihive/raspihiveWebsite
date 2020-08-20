import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

// M A I N   C O M P O N E N T
const NavItem = ({children, linkTo, style}) => {
  return (
    <StyledNavItem className='nav-item' style={style}>
      <Link to={linkTo}>
        <span>{children}</span>
      </Link>
    </StyledNavItem>
  )
}

// S T Y L E S
const StyledNavItem = styled.div`
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px 30px;
    font-size: 16px;
    font-weight: 800;
    text-decoration: none;
    color: var(--black-80);
    transition: var(--transition);
    height: 100%;
    width: 100%;
    border-radius: var(--radius);
    text-decoration: none;

    &:hover {
      color: var(--white);
      background-color: var(--primary);
    }
  }
  
  span {
    font-weight: 800;
    font-size: 16px;
    text-decoration: none;
  }
`
export default NavItem