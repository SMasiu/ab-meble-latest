import React, { useState } from 'react'
import { HeaderWrapper, HeaderInnerWrapper, HamburgerWrapper } from './header.style'
import { Logo } from 'components/logo/logo'
import { Link } from 'gatsby'
import { Navbar } from 'components/navbar/navbar'
import { Hamburger } from 'components/hamburger/hamburger'

export const Header: React.FC = () => {
  const [open, setOpen] = useState(false)

  const handleHamburgerClick = () => {
    setOpen(!open)
  }

  return (
    <HeaderWrapper>
      <HeaderInnerWrapper>
        <Link to="/">
          <Logo />
        </Link>
        <Navbar open={open} />
        <HamburgerWrapper>
          <Hamburger open={open} onClick={handleHamburgerClick} />
        </HamburgerWrapper>
      </HeaderInnerWrapper>
    </HeaderWrapper>
  )
}
