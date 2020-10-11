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
import { realizationsList } from 'inputs/realizations-list.input'

export const RealizationList = () => (
  <RealizationListWrapper>
    <RealizationListHeader>
      <HeadingH3>Nasze realizacje</HeadingH3>
    </RealizationListHeader>
    <RealizationsList>
      {realizationsList.map((item, i) => (
        <Link to={item.link} key={i}>
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
