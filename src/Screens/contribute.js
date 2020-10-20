import React from 'react'

// 🎁 C O M P O N E N T S
import Page from '../components/atoms/Page'
import Section from  '../components/atoms/Section'
import Container from  '../components/atoms/Container'
import H1 from  '../components/atoms/H1'
import H2 from  '../components/atoms/H2'
import P from  '../components/atoms/P'
import ButtonLink from  '../components/atoms/ButtonLink'

// 💫 M A I N   C O M P O N E N T
const Contribute = () => {
  return (
    <Page>
      <Section>
        <Container>
          <H1>Contribute</H1>
          <H2>How can I help make Hive better?</H2>
          <P>
            Its simply created for the users, by the users. There are no highly paid developers or poorly paid support personnel on the phones ready to take your call. There are only users who have seen a problem and done their best to fix it. This means that Hive will always need the contributions of users like you. 
            
          </P>
          <ButtonLink
            href="https://github.com/Raspihive/raspihive"
            style={{marginTop: 15, marginBottom: 30}}
          >RaspiHive Github</ButtonLink>
          <ButtonLink
            href="https://docs.raspihive.org"
            style={{marginTop: 15, marginBottom: 30, marginLeft: 20}}
          >Docs</ButtonLink>
          <ButtonLink
            href="https://discord.gg/bZhKUe6"
            style={{marginTop: 15, marginBottom: 30, marginLeft: 20}}
          >Discord</ButtonLink>
          <H2>How can you get involved?</H2>
          <P>
            If you want to contribute, feel free to jump in our GitHub repo, or get in touch with us and the community on Discord! 
          </P>
        </Container>
      </Section>
    </Page>
  )
}

export default Contribute
