import React, { Component, Fragment, useContext } from 'react'
import styled, { createGlobalStyle, ThemeContext } from 'styled-components'
import Header from './header'
import Nav from './nav'
import Head from 'next/head'

const bodyBg = require('../images/body-bg.png')

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.colors.darkGrey};
    color: ${props => props.theme.colors.lightGrey};
    font-family: ${props => props.theme.fonts.default};
    background-image: url(${bodyBg});
  }

  a {
    color: #ddd;
    text-decoration: none;

    &:hover {
      color: #666;
    }
  }
`

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`


const Content = styled.div`
  padding: 0 30px;
  flex: 1 1 auto;
  flex-direction: column;
  overflow: auto;

  p {
    font-size: 1em;
  }
`


export default ({title, children}) => {
  return (
    <Container>
      <Head>
        <title>{ title ? title : "Shawn Her Many Horses" }</title>
      </Head>
      <GlobalStyle />
      <Header />
      <Content>{children}</Content>
      <Nav />
    </Container>
  )
}
