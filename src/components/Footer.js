import React from 'react'
import styled from 'styled-components'
import FooterRow from  '../components/atoms/footerRow'
import SkelettSchräg from '../Animation/SkelettSchräg.svg'
import ImgFooter from  '../components/atoms/imgFooter'

// 💫 M A I N   C O M P O N E N T
const Footer = () => {
  return (
    <div>
    <StyledFooter>
      <div className="FooterStyle">
      <FooterRow>
      <ImgFooter className="skelett" src={SkelettSchräg}></ImgFooter>
      <p className="footer-link">Friends 
      <br></br>
      <br></br>
         <a href="http://iota.org" style={{ color: 'white', textDecoration: 'none', fontSize: 20}}>IOTA Foundation </a><br></br>
         <a href="http://raspberrypi.org" style={{ color: 'white', textDecoration: 'none', fontSize: 20}}>RaspberryPi Foundation </a><br></br>
         <a href="https://iota-industrie-4-0.blogspot.com/" style={{ color: 'white', textDecoration: 'none', fontSize: 21}}>Piota´s Blog </a><br></br></p>

      <p className="footer-link">About 
      <br></br>
      <br></br>
      <a href='/privacypolicy' style={{ color: 'white', textDecoration: 'none', fontSize: 20}}>Privacy Policy</a><br></br></p>
      
      <p className="footer-link">Community
      <br></br>
      <br></br> 
         <a href="https://github.com/Raspihive/raspihive" style={{ color: 'white', textDecoration: 'none', fontSize: 20}}>GitHub</a><br></br>
         <a href="https://discord.gg/bZhKUe6" style={{ color: 'white', textDecoration: 'none', fontSize: 20}}>Discord</a><br></br></p>

      </FooterRow>
     
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
    font-size: 28px;
    text-decoration: none;
    padding-left: -20%;
    padding-right: 10%;
    
  }

  .FooterStyle {
    background-color: #3B3B3B;
    
  }

  @media (max-width: 1000px) {
    flex-direction: column;
    .skelett {
      display: none !important;
      }
  }
`

export default Footer