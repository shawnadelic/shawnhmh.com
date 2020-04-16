import React, { Fragment } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import MediaQuery from 'react-responsive'
import { device } from '../utils/device'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.orange};
`

const NavListItem = styled.li`
  flex-direction: row;
  font-size: 1.25em;
  font-weight: bold;
`

function NavItem(props) {
  const {icon, label, href, ...rest} = props

    const isExternal = !(href.startsWith("/"))

    if (isExternal) {
      return (
        <NavListItem>
          <MediaQuery maxWidth={ device.tablet - 1 }>
            <a href={ href }>
              <FontAwesomeIcon icon={ icon } />
            </a>
          </MediaQuery>
          <MediaQuery minWidth={ device.tablet }>
            <a href={ href }>
              <span>{ label }</span>
            </a>
          </MediaQuery>
        </NavListItem>
      )
    }
    else {
      return (
        <NavListItem>
            <MediaQuery maxWidth={ device.tablet - 1 }>
              <Link href={ href } >
                <a><FontAwesomeIcon icon={ icon } /></a>
              </Link>
            </MediaQuery>
            <MediaQuery minWidth={ device.tablet }>
              <Link href={ href } >
                <a>{ label }</a>
              </Link>
            </MediaQuery>
        </NavListItem>
      )
    }
}


const NavList = styled.ul`
  display: flex;
  list-style-type: none;
  padding: 20px 30px;
  margin: 0;
  justify-content: space-around;

  a {
    color: #b5b310;
  }
`


const Container = styled.div`
  flex: none;
`


export default () => {
  return (
    <Container>
      <NavList>
        <NavItem href='/' label='Home' icon={['fas', 'home']} />
        <NavItem href='/resume' label='Resume' icon={['fas', 'file']} />
        <NavItem href="https://github.com/shawnadelic/" label="Github" icon={['fab', 'github']} />
        <NavItem href="https://www.linkedin.com/in/shawnadelic/" label="LinkedIn" icon={['fab', 'linkedin']} />
      </NavList>
    </Container>
  )
}
