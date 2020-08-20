import React from 'react'
import styled from 'styled-components'

// M A I N   C O M P O N E N T
const Page = ({children}) => {
  return (
    <StyledPage>
      {children}
    </StyledPage>
  )
}

// S T Y L E S
const StyledPage = styled.div`
  padding-top: 80px;
`

export default Page
