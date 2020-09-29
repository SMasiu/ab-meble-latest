import React from 'react'
import {
  AboutRealizationWrapper,
  RealizationHeader,
  RealizationContentWrapper,
  RealizationArticle,
  ReferenceWrapper,
  RealizationContent,
  ReferenceImageWrapper
} from './about-realization.style'
import { HeadingH3 } from 'components/headings/headings'
import { RealizationDynamicImage } from './realization-dynamic-image'

export interface Realization {
  realizationTextLine1: string
  realizationTextLine2: string
  referenceImage?: string
}

export interface RealizationProps {
  realization: Realization
}

export const AboutRealization: React.FC<RealizationProps> = ({
  realization: { realizationTextLine1, realizationTextLine2, referenceImage }
}) => (
  <AboutRealizationWrapper>
    <RealizationContentWrapper>
      <RealizationArticle>
        <RealizationHeader>
          <HeadingH3>O realizacji</HeadingH3>
        </RealizationHeader>
        <RealizationContent>{realizationTextLine1}</RealizationContent>
        <RealizationContent>{realizationTextLine2}</RealizationContent>
      </RealizationArticle>
      <ReferenceWrapper>
        {referenceImage && (
          <ReferenceImageWrapper>
            <RealizationDynamicImage fileName={referenceImage} alt="reference" />
          </ReferenceImageWrapper>
        )}
      </ReferenceWrapper>
    </RealizationContentWrapper>
  </AboutRealizationWrapper>
)
