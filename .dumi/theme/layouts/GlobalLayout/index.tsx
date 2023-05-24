import GlobalStyle from '@/ThemeProvider/GlobalStyle'
import { useOutlet } from 'dumi'
import React from 'react'

const GlobalLayout: React.FC = () => {
  const outlet = useOutlet()
  return (
    <>
      <GlobalStyle />
      {outlet}
    </>
  )
}

export default GlobalLayout
