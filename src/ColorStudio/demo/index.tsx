/**
 * iframe: true
 */
import { ColorStudio, ThemeProvider } from 'antd-color-editor';

export default () => {
  return (
    <ThemeProvider themeMode={'light'}>
      <ColorStudio />
    </ThemeProvider>
  );
};
