import React from 'react'
import {
  RealizationListWrapper,
  RealizationListHeader,
  RealizationsList,
  RealizationItem,
  RealizationItemImage,
  RealizationItemHeader
} from './realization-list.style'
import { HeadingH3, HeadingH5 } from 'components/headings/headings'
import { Link } from 'gatsby'

const items = [
  {
    img: '/products/product5.jpg',
    header: 'CPR Rzeszow'
  },
  {
    img: '/products/product6.jpg',
    header: 'JAKUBIEC Ruda Sląska'
  },
  {
    img: '/products/product7.jpg',
    header: 'KANLUX'
  },
  {
    img: '/products/product8.jpg',
    header: 'KUCHNIA'
  },
  {
    img: '/products/product9.jpg',
    header: 'MEGAN'
  },
  {
    img: '/products/product10.jpg',
    header: 'O_S COMPUTER SOFT_Radzionków'
  },
  {
    img: '/products/product5.jpg',
    header: 'poczta polska punkt'
  },
  {
    img: '/products/product6.jpg',
    header: 'QNT'
  },
  {
    img: '/products/product7.jpg',
    header: 'SONY'
  },
  {
    img: '/products/product8.jpg',
    header: 'TPP Zabrze'
  },
  {
    img: '/products/product9.jpg',
    header: 'WCPR Katowice'
  }
]

export const RealizationList = () => (
  <RealizationListWrapper>
    <RealizationListHeader>
      <HeadingH3>Nasze realizacje</HeadingH3>
    </RealizationListHeader>
    <RealizationsList>
      {items.map((item, i) => (
        <Link to={'/realizacje/qnt'} key={i}>
          <RealizationItem>
            <RealizationItemImage url={item.img} />
            <RealizationItemHeader>
              <HeadingH5>{item.header}</HeadingH5>
            </RealizationItemHeader>
          </RealizationItem>
        </Link>
      ))}
    </RealizationsList>
  </RealizationListWrapper>
)
