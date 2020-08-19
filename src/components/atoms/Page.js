import React from 'react'
import styled from 'styled-components'

const Page = ({children}) => {
  return (
    <StyledPage>
      {children}
    </StyledPage>
  )
}

const StyledPage = styled.div`
  padding-top: 80px;
`

export default Page
