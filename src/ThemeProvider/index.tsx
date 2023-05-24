import { ThemeProvider as AntdThemeProvider, setupStyled, type ThemeMode } from 'antd-style'
import React from 'react'
import { ThemeContext } from 'styled-components'
import GlobalStyle from './GlobalStyle'
import { App } from 'antd'

export interface ThemeProviderProps {
  children: React.ReactNode
  themeMode?: ThemeMode
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, themeMode }) => {
  setupStyled({ ThemeContext })
  return (
    <AntdThemeProvider themeMode={themeMode}>
      <GlobalStyle />
      <App>{children}</App>
    </AntdThemeProvider>
  )
}

export default ThemeProvider
