import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from 'styles/global-styles'
import { theme } from 'styles/theme'
import { Header } from 'components/header/header'
// import { Footer } from 'components/footer/footer'

interface LayoutProps {
  children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyles />

        <Header />
        <main>{children}</main>
        {/* <Footer /> */}
      </ThemeProvider>
    </div>
  )
}
