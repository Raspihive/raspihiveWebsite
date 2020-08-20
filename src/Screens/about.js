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
          <H1>About Page goes here</H1>
          <P>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
          </P>
        </Container>
      </Section>
    </Page>
  )
}

export default About
