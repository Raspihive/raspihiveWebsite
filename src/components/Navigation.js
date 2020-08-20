import React from 'react'
import styled from 'styled-components'

// 🎁 C O M P O N E N T S
import Logo from './atoms/Logo'
import ButtonLink from './atoms/ButtonLink'
import NavItem from './atoms/NavItem'

// 💫 M A I N   C O M P O N E N T 
const Navigation = () => {
  const [menuIsOpen, setMenuIsOpen] = React.useState(false)

  const onMenuBtnClick = () => {
    setMenuIsOpen(!menuIsOpen)
  }

  return (
    <StyledNavigation className={menuIsOpen ? 'menu-opened' : ''}>
      <Logo />

      {/* Menu */}
      <div className="menu">
        <NavItem linkTo="/about">About</NavItem>
        <NavItem linkTo="/contribute">Contribute</NavItem>
        <ButtonLink href='/download' style={{marginLeft: 25, marginRight: 25}}>Download</ButtonLink>
      </div>

      {/* Mobile Menu Button */}
      <button 
        onClick={onMenuBtnClick} 
        className={`mobile-nav-button ${menuIsOpen ? 'menu-opened' : ''} `}
      >
        <div className="pipe-container">
          <div className="pipe" />
          <div className="pipe" />
          <div className="pipe" />
        </div>
      </button>
    </StyledNavigation>
  )
}

// 🎨 S T Y L E S
const StyledNavigation = styled.div`
  --nav-height: 80px;
  
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  height: var(--nav-height);
  width: 100%;
  background-color: var(--white);
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  box-shadow: var(--box-shadow);
  transition: var(--transition);

  .menu {
    height: var(--nav-height);
    display: flex;
    align-items: center;
  }
  
  button {
    margin: 0 30px;
    border: none;
    outline: none;
    box-shadow: none;
  }

  .mobile-nav-button {
    position: relative;
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 50px;
    width: 50px;
    background-color: var(--primary);
    border-radius: var(--radius);
    margin: 15px 20px;
    transition: var(--transition);
    box-shadow: var(--box-shadow);
    
    .pipe-container {
      display: flex;
      justify-content: center;
      align-items: center;
      transition: var(--transition);
    }

    .pipe {
      position: absolute;
      height: 3px;
      width: 22px;
      border-radius: var(--radius);
      background-color: var(--white);
      transition: var(--transition);
      
      &:nth-child(1) {
        transform: translateY(-8px);
      }
      
      &:nth-child(3) {
        transform: translateY(8px);
      }
    }

    &.menu-opened {
      .pipe-container {
        transform: rotate(-180deg);
      }
      .pipe {
        &:nth-child(1) {
          transform: translateY(0px) rotate(-45deg);
        }
        
        &:nth-child(2) {
          opacity: 0;
        }
        
        &:nth-child(3) {
          transform: translateY(0px) rotate(45deg);
        }
      }
    }
  }

  @media (max-width: 900px) {
    flex-wrap: wrap;

    .menu {
      display: none;
    }

    &.menu-opened {
      height: 100vh;

      .menu {
        display: flex;
        order: 2;
        min-width: 100%;
        height: 100%;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        padding-top: 30px;
        
        .nav-item {
          margin-bottom: 30px;
          
          a {
            background-color: var(--light);

            &:hover {
              background-color: var(--primary);
            }
          }
        }
      }
    }

    .mobile-nav-button {
      display: flex;
    }
  }
  
`

export default Navigation
