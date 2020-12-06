import React from 'react'

// 🎁 C O M P O N E N T S
import Page from '../components/atoms/Page'
import Section from  '../components/atoms/Section'
import Container from  '../components/atoms/Container'
import H1 from  '../components/atoms/H1'
import P from  '../components/atoms/P'
import '../App.css'

// 💫 M A I N   C O M P O N E N T
const Download = () => {
  return (
    <Page>
      <Section>
        <Container>
          <H1>Download</H1>
          <br></br>
          <P>
          Download the pre-installed image:  
          </P>
          <br></br>
          <br></br>
          <P>
            Version 1.0 | 2020-11-30
          </P>
          <button id="downloadButton" style={{ width: 150, height: 40 }}><a href="https://drive.google.com/u/0/uc?export=download&confirm=KNZ1&id=1Zhg4dCleyfyMNd4Hy2xtmO5jwIEryqyx">Download</a></button>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </Container>
      </Section>
    </Page>
    
  )
}


export default Download
