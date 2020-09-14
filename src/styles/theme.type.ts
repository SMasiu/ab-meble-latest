export interface ColorTheme {
  primary100: string
  primary200: string
  primary300: string
  light100: string
  light200: string
  light300: string
  dark100: string
  dark200: string
  dark300: string
}

export interface FontSizeTheme {
  sm: string
  md: string
  lg: string
  headingSm: string
  headingMd: string
  headingLg: string
}

export interface FontFamilyTheme {
  primary: string
  secondary: string
}

export interface PageTheme {
  width: string
}

export interface Theme {
  colors: ColorTheme
  fontSize: FontSizeTheme
  fontFamily: FontFamilyTheme
  page: PageTheme
}

export interface ThemeProps {
  theme: Theme
}

export type StyledThemeProps<T> = T & ThemeProps
