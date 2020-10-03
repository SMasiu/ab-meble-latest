import React from 'react'
import {
  RealizationListWrapper,
  RealizationListHeader,
  RealizationsList,
  RealizationItem,
  RealizationItemHeader
} from './realization-list.style'
import { HeadingH3, HeadingH5 } from 'components/headings/headings'
import { Link } from 'gatsby'
import { RealizationListDynamicImage } from './dynamic-image'

const items = [
  {
    img: `realization_list1.jpg`,
    header: 'CPR Rzeszow'
  },
  {
    img: `realization_list2.jpg`,
    header: 'JAKUBIEC Ruda Sląska'
  },
  {
    img: `realization_list3.jpg`,
    header: 'KANLUX'
  },
  {
    img: `realization_list4.jpg`,
    header: 'KUCHNIA'
  },
  {
    img: `realization_list5.jpg`,
    header: 'MEGAN'
  },
  {
    img: `realization_list6.jpg`,
    header: 'O_S COMPUTER SOFT_Radzionków'
  },
  {
    img: `realization_list1.jpg`,
    header: 'poczta polska punkt'
  },
  {
    img: `realization_list2.jpg`,
    header: 'QNT'
  },
  {
    img: `realization_list3.jpg`,
    header: 'SONY'
  },
  {
    img: `realization_list4.jpg`,
    header: 'TPP Zabrze'
  },
  {
    img: `realization_list5.jpg`,
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
            <RealizationListDynamicImage fileName={item.img} alt="realicajca" />
            <RealizationItemHeader>
              <HeadingH5>{item.header}</HeadingH5>
            </RealizationItemHeader>
          </RealizationItem>
        </Link>
      ))}
    </RealizationsList>
  </RealizationListWrapper>
)
