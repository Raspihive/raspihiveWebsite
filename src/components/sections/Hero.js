import React from 'react'
import styled from 'styled-components'

//  C O M P O N E N T S
import Container from '../atoms/Container'
import Row from '../atoms/Row'
import Column from '../atoms/Column'
import H1 from '../atoms/H1'
import Subtitle from '../atoms/Subtitle'
import Button from '../atoms/Button'
import bgImage from '../../assets/images/hero.jpg'


// M A I N   C O M P O N E N T
const Hero = ({
  onClickBuy, 
  onClickLearn
}) => {
  return (
    <StyledHero style={{backgroundImage: `url(${bgImage})`}}>
      <Container>
        <Row>
          <Column>
            <H1 color="var(--white)">Run your own IOTA Node with RaspiHive</H1>
            <Subtitle>Build your own Raspihive with our 
              <button 
                onClick={onClickLearn}
                className='call-to-action-link'
              >Do It Yourself guides </button>
              . If you just want to get started buy our 
              <button 
                onClick={onClickBuy}
                className='call-to-action-link'
              >Plug & Play</button>
              starter pack.</Subtitle>
            <Button onClick={onClickBuy}>Discover more</Button>
          </Column>
          <Column></Column>
        </Row>
      </Container>
    </StyledHero>
  )
}

const StyledHero = styled.div`
  height: 100vh;
  background-size: cover;
  background-position: center;
  color: var(--white);
  padding: 100px 0;
  
  .call-to-action-link {
    border: none;
    box-shadow: none;
    background-color: transparent;
    color: var(--primary-light);
    font-weight: 800;
    font-size: 20px;
    text-decoration: underline;
    transition: var(--transition);
    outline: none;
    cursor: pointer;
    
    &:hover {
      color: var(--white);
      text-decoration: none;
    }
  }
`

export default Hero
