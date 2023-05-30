import { App } from 'antd';
import { ThemeProvider as AntdThemeProvider, setupStyled, type ThemeMode } from 'antd-style';
import { memo, type ReactNode } from 'react';
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
