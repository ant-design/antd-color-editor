import { App } from 'antd';
import { ThemeProvider as AntdThemeProvider, type ThemeMode, setupStyled } from 'antd-style';
import { type ReactNode, memo } from 'react';
import { ThemeContext } from 'styled-components';

import GlobalStyle from './GlobalStyle';

export interface ThemeProviderProps {
  children: ReactNode;
  themeMode?: ThemeMode;
}

const ThemeProvider = memo<ThemeProviderProps>(({ children, themeMode }) => {
  setupStyled({ ThemeContext });
  return (
    <AntdThemeProvider themeMode={themeMode}>
      <GlobalStyle />
      <App>{children}</App>
    </AntdThemeProvider>
  );
});

export default ThemeProvider;
