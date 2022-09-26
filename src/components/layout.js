import React from "react"
import styled from "styled-components"
import GlobalStyle from "./globalStyle"
import Header from "./header"

const StyledLayout = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  display: grid;

  #main-content {
    margin: 70px auto 0;
  }
`

const Layout = ({ children }) => {
  return (
    <StyledLayout>
      <GlobalStyle />
      <Header />
      <main id="main-content">{children}</main>
    </StyledLayout>
  )
}

export default Layout