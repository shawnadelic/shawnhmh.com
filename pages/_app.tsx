import App from 'next/app'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { config, library } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faFile, faHome } from '@fortawesome/free-solid-svg-icons'

import { theme } from '../utils/theme'

// See https://github.com/FortAwesome/react-fontawesome#integrating-with-other-tools-and-frameworks
config.autoAddCss = false;
library.add(
  faGithub, faLinkedin, faFile, faHome
);

// https://github.com/zeit/next-plugins/issues/488
const globalStyles = require('../styles/global.scss')

export default class ThemedApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}
