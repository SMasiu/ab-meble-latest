import React from 'react'
import { HeaderWrapper, HeaderInnerWrapper } from './header.style'
import { Logo } from 'components/logo/logo'
import { Link } from 'gatsby'
import { Navbar } from 'components/navbar/navbar'

export const Header: React.FC = () => (
  <HeaderWrapper>
    <HeaderInnerWrapper>
      <Link to="/">
        <Logo />
      </Link>
      <Navbar />
    </HeaderInnerWrapper>
  </HeaderWrapper>
)
