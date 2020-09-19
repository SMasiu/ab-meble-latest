import { RealizationProps } from 'components/realizations-page/realizations-page'
import { PATH_PREFIX } from 'common/path'

export const realizationInput: RealizationProps = {
  aboutRealization: {
    realizationTextLine1: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio harum enim, laborum in eos possimus corporis alias. Quidem perspiciatis deserunt, cum molestiae atque praesentium dolore!`,
    realizationTextLine2: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio harum enim, laborum in eos possimus corporis alias. Quidem perspiciatis deserunt, cum molestiae atque praesentium dolore!`,
    referenceImage: `${PATH_PREFIX}/realizations/qnt/qnt_ref.jpg`
  },
  product: {
    items: [
      { img: `${PATH_PREFIX}/realizations/qnt/qnt_1.jpg` },
      { img: `${PATH_PREFIX}/realizations/qnt/qnt_2.jpg` },
      { img: `${PATH_PREFIX}/realizations/qnt/qnt_3.jpg` },
      { img: `${PATH_PREFIX}/realizations/qnt/qnt_4.jpg` },
      { img: `${PATH_PREFIX}/realizations/qnt/qnt_5.jpg` },
      { img: `${PATH_PREFIX}/realizations/qnt/qnt_6.jpg` },
      { img: `${PATH_PREFIX}/realizations/qnt/qnt_7.jpg` },
      { img: `${PATH_PREFIX}/realizations/qnt/qnt_8.jpg` },
      { img: `${PATH_PREFIX}/realizations/qnt/qnt_9.jpg` },
      { img: `${PATH_PREFIX}/realizations/qnt/qnt_10.jpg` },
      { img: `${PATH_PREFIX}/realizations/qnt/qnt_11.jpg` },
      { img: `${PATH_PREFIX}/realizations/qnt/qnt_12.jpg` },
      { img: `${PATH_PREFIX}/realizations/qnt/qnt_13.jpg` },
      { img: `${PATH_PREFIX}/realizations/qnt/qnt_14.jpg` },
      { img: `${PATH_PREFIX}/realizations/qnt/qnt_15.jpg` },
      { img: `${PATH_PREFIX}/realizations/qnt/qnt_16.jpg` },
      { img: `${PATH_PREFIX}/realizations/qnt/qnt_17.jpg` },
      { img: `${PATH_PREFIX}/realizations/qnt/qnt_18.jpg` }
    ],
    heading: 'Qnt',
    subHeading: 'Realizacja'
  }
}
