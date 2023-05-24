import { ThemeProvider } from '@/index'
import { useOutlet } from 'dumi'
import React from 'react'
import { useThemeStore } from 'dumi-theme-antd-style/dist/store/useThemeStore'

const DemoLayot: React.FC = () => {
  const themeMode = useThemeStore((state) => state.themeMode)
  const outlet = useOutlet()
  return <ThemeProvider themeMode={themeMode}>{outlet}</ThemeProvider>
}

export default DemoLayot
