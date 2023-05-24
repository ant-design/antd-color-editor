import { ThemeProvider as AntdThemeProvider, setupStyled, type ThemeMode } from 'antd-style'
import { type ReactNode, memo } from 'react'
import { ThemeContext } from 'styled-components'
import GlobalStyle from './GlobalStyle'
import { App } from 'antd'

export interface ThemeProviderProps {
  children: ReactNode
  themeMode?: ThemeMode
}

const ThemeProvider = memo<ThemeProviderProps>(({ children, themeMode }) => {
  setupStyled({ ThemeContext })
  return (
    <AntdThemeProvider themeMode={themeMode}>
      <GlobalStyle />
      <App>{children}</App>
    </AntdThemeProvider>
  )
})

export default ThemeProvider
