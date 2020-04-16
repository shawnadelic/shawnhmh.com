import React from 'react'
import styled from 'styled-components'
import { Page, Document } from 'react-pdf'
import { device } from '../utils/device'

const Container = styled.div`
  flex: 1 1 auto;
  padding: 40px 20px;
  width: 60%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;

  canvas {
    width: 100% !important;
    height: auto !important;
  }
`

const InnerContainer = styled.div`
  overflow: auto;
  overflow-x: hidden;
  margin: 20px 0 20px;
`

export default () => {
  return (
      <Container>
        <InnerContainer>
          <Document file="/HerManyHorses-Resume.pdf">
            <Page pageNumber={1} />
          </Document>
        </InnerContainer>
      </Container>
      )
}
