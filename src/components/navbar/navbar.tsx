import React from 'react'
import { NavbarWrapper, NavbarList, NavbarListItem, NavbarListLink } from './navbar.style'
import { navbarInputs } from 'inputs/navbar.inputs'

export const Navbar = () => (
  <NavbarWrapper>
    <NavbarList>
      {navbarInputs.items.map((item, i) => (
        <NavbarListItem key={i}>
          <NavbarListLink to={item.link}>{item.name}</NavbarListLink>
        </NavbarListItem>
      ))}
    </NavbarList>
  </NavbarWrapper>
)
