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
            Version 2.4.3 | 2022-01-02 (recommended)
          </P>
          <button id="downloadButton" style={{ width: 150, height: 40 }}><a href="https://drive.google.com/file/d/13R5wPVXcwNzxmZu6B3pMQBozzj43J4Zj/view?usp=sharing">Download</a></button>
          <br></br>
          <br></br>
          <P>
            Version 2.1 | 2021-03-08
          </P>
          <button id="downloadButton" style={{ width: 150, height: 40 }}><a href="https://drive.google.com/u/0/uc?export=download&confirm=2VJS&id=1F6y7l_AqkaoPYWtxgWUVmD9wBqTEo00R">Download</a></button>
          <br></br>
          <br></br>
          <P>
            Version 2.0 | 2021-02-28
          </P>
          <button id="downloadButton" style={{ width: 150, height: 40 }}><a href="https://drive.google.com/u/0/uc?export=download&confirm=uKys&id=1F6y7l_AqkaoPYWtxgWUVmD9wBqTEo00R">Download</a></button>
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
