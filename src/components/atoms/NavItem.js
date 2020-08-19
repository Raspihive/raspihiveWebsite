import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const NavItem = ({children, linkTo}) => {
  return (
    <StyledNavItem>
      <Link to={linkTo}>
        <span>{children}</span>
      </Link>
    </StyledNavItem>
  )
}

const StyledNavItem = styled.div`
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    font-size: 16px;
    font-weight: 800;
    text-decoration: none;
    color: var(--black-80);
    transition: var(--transition);
    height: 100%;
    width: 100%;

    text-decoration: none;

    &:hover {
      color: var(--black);
      background-color: var(--light-50);
    }
  }
  
  span {
    font-weight: 800;
    font-size: 16px;
    text-decoration: none;
  }
`
export default NavItem