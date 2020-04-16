import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.blue};
`

export default () => {
  return (
    <Layout
      title="404 Not Found"
    >
      <Title>404 Not Found</Title>
      <p>Oops, we didn't find anything at that address!</p>
    </Layout>
  )
}
