import { defineConfig } from 'dumi'
import { homepage } from './package.json'

const isProd = process.env.NODE_ENV === 'production'
const isWin = process.platform === 'win32'

const themeConfig = {
  logo: 'https://gw.alipayobjects.com/zos/bmw-prod/af1ea898-bf02-45d1-9f30-8ca851c70a5b.svg',
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
  favicons: ['https://gw.alipayobjects.com/zos/bmw-prod/51a51720-8a30-4430-b6c9-be5712364f04.svg'],
  npmClient: 'pnpm',
  base: '/',
  publicPath: '/',
  outputPath: 'docs-dist',
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
