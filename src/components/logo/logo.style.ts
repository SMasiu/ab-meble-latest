import styled from 'styled-components'

export const LogoWrapper = styled.figure`
  width: 150px;
  padding: 10px 0;
  transition: width 0.3s;
  will-change: width;

  @media (max-width: 1000px) {
    width: 125px;
  }
`

export const LogoImg = styled.img``
