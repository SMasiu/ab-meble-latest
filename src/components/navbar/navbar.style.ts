import styled, { css } from 'styled-components'
import { Link } from 'gatsby'
import { getColor, getBgColor } from 'styles/css.helpers'
import { ThemeProps } from 'styles/theme.type'

export type NavbarWrapperProps = {
  open: boolean
} & ThemeProps

export const NavbarWrapper = styled.nav<NavbarWrapperProps>`
  @media (max-width: 1000px) {
    position: fixed;
    width: 100vw;
    height: calc(100vh - 80px);
    top: 80px;
    left: 100%;
    transition: transform 0.3s;
    will-change: transform;
    ${getBgColor('light200')}

    ${({ open }: NavbarWrapperProps) => css`
      transform: translateX(${open ? '-100%' : '0'});
    `}
  }
`

export const NavbarList = styled.ul`
  display: flex;
  list-style-type: none;

  @media (max-width: 1000px) {
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

export const NavbarListItem = styled.li``

export const NavbarListLink = styled(Link)`
  ${getColor('dark100')}
  text-decoration: none;
  display: block;
  padding: 30px 15px;
`
