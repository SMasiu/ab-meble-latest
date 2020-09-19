import React from 'react'
import { LogoWrapper, LogoImg } from './logo.style'
import { PATH_PREFIX } from 'common/path'

export const Logo: React.FC = () => (
  <LogoWrapper>
    <LogoImg src={`${PATH_PREFIX}/logo.svg`} alt="logo"></LogoImg>
  </LogoWrapper>
)
