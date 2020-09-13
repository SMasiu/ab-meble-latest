import React from 'react'
import { HeaderWrapper } from './header.style'
import { Logo } from 'components/logo/logo'
import { Link } from 'gatsby'
import { Navbar } from 'components/navbar/navbar'

export const Header: React.FC = () => (
  <HeaderWrapper>
    <Link to="/">
      <Logo />
    </Link>
    <Navbar />
  </HeaderWrapper>
)
