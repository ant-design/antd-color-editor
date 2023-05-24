import { defineConfig } from 'dumi'
import { homepage } from './package.json'

const isProd = process.env.NODE_ENV === 'production'
const isWin = process.platform === 'win32'

const themeConfig = {
  name: 'Kitchen Color Studio',
  description: 'an open-source color editor for designing color system"',
  footer: 'Made with ❤️ by Kitchen',
  socialLinks: {
    github: homepage,
  },
}

export default defineConfig({
  themeConfig,
  title: 'Kitchen Color Studio',
  favicons: ['https://raw.githubusercontent.com/lobehub/favicon/main/dist/favicon.ico'],
  npmClient: 'pnpm',
  base: '/',
  publicPath: '/',
  ssr: isProd ? {} : false,
  apiParser: isWin ? false : {},
  resolve: isWin
    ? undefined
    : {
        entryFile: './src/index.ts',
      },
  define: {
    'process.env': process.env,
  },
  extraBabelPlugins: [
    [
      'babel-plugin-styled-components',
      {
        minify: true,
        transpileTemplateLiterals: true,
        displayName: process.env.NODE_ENV === 'development',
        pure: true,
      },
    ],
  ],
})
