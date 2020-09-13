import styled from 'styled-components'
import { Link } from 'gatsby'
import { getColor } from 'styles/css.helpers'

export const NavbarWrapper = styled.nav``

export const NavbarList = styled.ul`
  display: flex;
  list-style-type: none;
`

export const NavbarListItem = styled.li``

export const NavbarListLink = styled(Link)`
  ${getColor('dark100')}
  text-decoration: none;
  display: block;
  padding: 30px 15px;
`
