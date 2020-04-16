import React from 'react'
import styled from 'styled-components'
import dynamic from 'next/dynamic'
import Layout from '../components/layout'

const Reader = dynamic(() => import('../components/reader'), {
  ssr: true
})

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.blue};
`

export default () => {
    return (
      <Layout
        title="Shawn Her Many Horses - Resume"
      >
        <Reader />
      </Layout>
    )
}
