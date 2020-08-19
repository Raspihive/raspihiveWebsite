import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logos/unser-logo.svg'
import Button from './atoms/Button'
import NavItem from './atoms/NavItem'

const Navigation = () => {
  return (
    <StyledNavigation>
      <NavItem linkTo="/">
        <img src={logo} alt='RaspiHive Logo'/>
      </NavItem>
      <div className="menu">
        <NavItem linkTo="/about">About</NavItem>
        <NavItem linkTo="/contribute">Contribute</NavItem>
        <Button linkTo='/download'>Download</Button>
      </div>
    </StyledNavigation>
  )
}





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
    align-items: center;
  }
  
  button {
    margin: 0 30px;
  }
  `
export default Navigation
