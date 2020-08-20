import React from 'react'
import styled from 'styled-components'

// C O M P O N E N T S
import Logo from './atoms/Logo'
import Button from './atoms/Button'
import NavItem from './atoms/NavItem'

// M A I N   C O M P O N E N T 
const Navigation = () => {
  return (
    <StyledNavigation>
      <Logo />
      <div className="menu">
        <NavItem linkTo="/about">About</NavItem>
        <NavItem linkTo="/contribute">Contribute</NavItem>
        <Button linkTo='/download'>Download</Button>
      </div>
    </StyledNavigation>
  )
}

// S T Y L E S
const StyledNavigation = styled.div`
  height: 80px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: var(--white);
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: var(--box-shadow);

  img {
    height: 40px;
  }

  .menu {
    display: flex;
    align-items: stretch;
  }
  
  button {
    margin: 0 30px;
  }
  `

export default Navigation
