import { defineConfig } from 'dumi';

import pkg from './package.json';

const isProdSite = process.env.PREVIEW !== '1' && process.env.NODE_ENV === 'production';
const isWin = process.platform === 'win32';

const themeConfig = {
  apiHeader: {
    docUrl: `{github}/tree/master/src/{atomId}/index.md`,
    match: ['/components'],
    pkg: pkg.name,
    sourceUrl: `{github}/tree/master/src/{atomId}/index.tsx`,
  },
  description: 'An open-source color editor for designing color system"',
  footer: 'Made with ❤️ by Ant Design',
  logo: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
  name: 'Antd Color Editor',
  socialLinks: {
    github: pkg.homepage,
  },
};

export default defineConfig({
  apiParser: isWin ? false : {},
  base: isProdSite ? '/antd-color-editor/' : '/',
  define: {
    'process.env': process.env,
  },
  devtool: isProdSite ? false : 'source-map',
  exportStatic: {},
  extraBabelPlugins: [
    [
      'babel-plugin-styled-components',
      {
        displayName: !isProdSite,
        minify: true,
        pure: true,
        transpileTemplateLiterals: true,
      },
    ],
  ],
  favicons: ['https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg'],
  hash: true,
  npmClient: 'pnpm',
  outputPath: 'docs-dist',
  publicPath: isProdSite ? '/antd-color-editor/' : '/',
  resolve: isWin
    ? undefined
    : {
        entryFile: './src/index.ts',
      },
  themeConfig,
  title: 'Antd Color Editor',
});
