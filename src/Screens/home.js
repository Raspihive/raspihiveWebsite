import React from 'react'

// C O M P O N E N T S
import Page from '../components/atoms/Page'
import Hero from '../components/sections/Hero'
import Section from  '../components/atoms/Section'
import Container from  '../components/atoms/Container'
import Row from  '../components/atoms/Row'
import Column from  '../components/atoms/Column'
import H1 from  '../components/atoms/H1'
import P from  '../components/atoms/P'
import Img from  '../components/atoms/Img'
import Button from  '../components/atoms/Button'

// A S S E T S
import plug_and_play from '../assets/images/plug_and_play.jpg'
import doItYourSelf from '../assets/images/doityourself.jpg'

// M A I N   C O M P O N E N T
const Home = () => {
  const scrollToRef = (ref) => {
    console.log("ref", ref.current.offsetTop)
    window.scrollTo(0, ref.current.offsetTop)
  }

  const buySectionRef = React.useRef(null)
  const learnRef = React.useRef(null)

  const onClickBuy = () => {scrollToRef(buySectionRef)}
  const onClickLearn = () => {scrollToRef(learnRef)}

  return (
    <Page>
      <Hero 
        onClickBuy={onClickBuy} 
        onClickLearn={onClickLearn} 
      />

      <Section >
        <div ref={buySectionRef}></div>
        <Container>
          <Row>
            <Column center>
              <H1>Buy an RaspiHive Plug&Play</H1>
              <P>Running an IOTA Node was never easier. Just connect RaspiHive to power and the internet.</P>
              <button disabled>Buy (soon)</button>
            </Column>
            <Column>
              <Img src={plug_and_play}></Img>
            </Column>
          </Row>
        </Container>
      </Section>

      <Section>
        <div ref={learnRef}></div>
        <Container>
          <Row>
            <Column>
              <Img src={doItYourSelf}></Img>
            </Column>
            <Column center>
              <H1>Do it yourself</H1>
              <P>All what you need is a Raspberry PI. YOu can follow our instructions with detailed step by step descriptions and a case which you can print with an 3D printer. Or go creative an build your own RaspiHive with an solar panel or as cluster version. </P>
              <a target="_blank" href="http://docs.raspihive.org">To the Docs</a>
            </Column>
          </Row>
        </Container>
      </Section>
    </Page>
  )
}

export default Home;