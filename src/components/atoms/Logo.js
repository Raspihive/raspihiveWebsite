import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

// A S S E T S
import logo from '../../assets/logos/unser-logo.svg'

// M A I N   C O M P O N E N T
const Logo = () => {
  return (
    <StyledLogo>
      <Link to='/'>
        <img src={logo} alt='RaspiHive Logo'/>
      </Link>
    </StyledLogo>
  )
}

// S T Y L E S
const StyledLogo = styled.div`
  margin-left: 25px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: 40px;
  }
`

export default Logo
