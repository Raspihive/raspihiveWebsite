import React from 'react'

// 🎁 C O M P O N E N T S
import Page from '../components/atoms/Page'
import Section from  '../components/atoms/Section'
import Container from  '../components/atoms/Container'
import H1 from  '../components/atoms/H1'
import P from  '../components/atoms/P'

// 💫 M A I N   C O M P O N E N T
const About = () => {
  return (
    <Page>
      <Section>
        <Container>
          <H1>What is RaspiHive?</H1>
          <br></br>
          <P>
          Its simply created for the users, by the users. There are no highly paid developers or poorly paid support personnel on the phones ready to take your call. 
          There are only users who have seen a problem and done their best to fix it. 
          <br></br>
          <br></br>
          The goal is, to provide a complete ready-to-go Linux image to install (for best experience with a Raspberry Pi and a touchscreen). 
          This image provides (depending on the stage of the project) diferrent options to install an IOTA Node, security, Dashboards, and make it accessible. 
          <br></br>
          <br></br>
          sounds great, right? a plug and play all-in-one solution!  
          <br></br>
          <br></br>

          </P>
        </Container>
      </Section>
    </Page>
  )
}

export default About
