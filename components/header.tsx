import React from 'react'
import styled from 'styled-components'

const headerBg = require('../images/header-bg.png')

const Name = styled.h1`
  font-size: 1.9em;
  font-weight: bolder;
`

const Container = styled.header`
  background-color: ${(props) => props.theme.colors.lightGrey};
  background-image: url(${headerBg});
  padding: 10px 30px 5px;
  color: ${({ theme }) => theme.colors.orange};
  flex: none;
`

export default () => {
  return (
    <Container>
      <div>
        <Name>Shawn Her Many Horses</Name>
      </div>
    </Container>
  )
}
