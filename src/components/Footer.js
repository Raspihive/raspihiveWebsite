import React from 'react'
import styled from 'styled-components'

// 💫 M A I N   C O M P O N E N T
const Footer = () => {
  return (
    <div>
    <StyledFooter>
      <div className="FooterStyle">
      <p className="footer-link">Friends</p>
         <a href="http://iota.org" style={{ color: 'white', textDecoration: 'none'}}>IOTA Foundation </a><br></br>
         <a href="http://raspberrypi.org" style={{ color: 'white', textDecoration: 'none'}}>Raspberry Pi Foundation </a><br></br>
         <a href="https://iota-industrie-4-0.blogspot.com/" style={{ color: 'white', textDecoration: 'none'}}>Piota´s Blog </a><br></br>

      <p className="footer-link">About</p>
         <a href='/privacypolicy' style={{ color: 'white', textDecoration: 'none'}}>Privacy Policy</a><br></br>

      <p className="footer-link">Community</p>
         <a href="https://github.com/Raspihive/raspihive" style={{ color: 'white', textDecoration: 'none'}}>GitHub </a><br></br>
         <a href="https://discord.gg/bZhKUe6" style={{ color: 'white', textDecoration: 'none'}}>Discord</a><br></br>
      </div>

    </StyledFooter>
    </div>
  )
}

// 🎨 S T Y L E S
const StyledFooter = styled.div`
  flex-direction: row;
  
  .footer-link {
    color: white;
    font-size: 27px;
    text-decoration: none;
    padding-left: 80px;
    padding-right: 80px;

  }

  .FooterStyle {
    background-color: grey;
    text-decoration: none;
  }

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`

export default Footer