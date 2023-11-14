import { Highlighter } from 'dumi-theme-antd-style';
import { camelCase, kebabCase } from 'lodash-es';
import { memo } from 'react';

import type { IScales } from '@/genScalesByConfig';
import { colorTypeFormat, getAlphaColor } from '@/index';
import { CodeView } from '@/styles';

export interface ITokenView {
  config: {
    codeType: 'css' | 'less' | 'scss' | 'js';
    colorType: 'mix' | 'hex' | 'rgb' | 'hsl';
    isolateDarkToken: boolean;
  };
  data: {
    name: string;
    scales: IScales;
  }[];
}

const TokenView = memo<ITokenView>(({ data, config }) => {
  const { colorType, codeType, isolateDarkToken }: any = config;
  const tokenData = data.map((item) => ({
    dark: item.scales.dark.map((s) => colorTypeFormat(s, colorType)),
    darkA: item.scales.dark.map((s) => colorTypeFormat(getAlphaColor(s, '#000'), colorType)),
    light: item.scales.light.map((s) => colorTypeFormat(s, colorType)),
    lightA: item.scales.light.map((s) => colorTypeFormat(getAlphaColor(s, '#fff'), colorType)),
    name: item.name,
  }));

  let content = null;

  if (codeType === 'js') {
    if (isolateDarkToken) {
      const objLight: any = {};
      const objDark: any = {};
      for (const item of tokenData) {
        objLight[camelCase(item.name)] = {
          alpha: item.lightA,
          solid: item.light,
        };
        objDark[camelCase(item.name)] = {
          alpha: item.darkA,
          solid: item.dark,
        };
      }

      content = `
export interface ColorScaleItem {
  solid: string[],
  alpha: string[],
}

export interface ColorScales {
  ${Object.keys(objLight)
    .map((key) => `${key}: ColorScaleItem;`)
    .join('\n')}
}

export const LightTheme:ColorScales = ${JSON.stringify(objLight, null, 2)}

export const DarkTheme:ColorScales = ${JSON.stringify(objDark, null, 2)}
      `;
    } else {
      const obj: any = {};
      for (const item of tokenData) {
        obj[camelCase(item.name)] = {
          dark: item.dark,
          darkA: item.darkA,
          light: item.light,
          lightA: item.lightA,
        };
      }

      content = `
export interface ColorScaleItem {
  light: string[],
  lightA: string[],
  dark: string[],
  darkA: string[],
}

export interface ColorScales {
  ${Object.keys(obj)
    .map((key) => `${key}: ColorScaleItem;`)
    .join('\n')}
}

export const Theme:ColorScales = ${JSON.stringify(obj, null, 2)}
      `;
    }
  } else {
    let tokenLightList = isolateDarkToken ? [`/* light.${codeType} */`] : [];
    let tokenDarkList = isolateDarkToken ? ['\n', `/* dark.${codeType} */`] : [];
    for (const item of tokenData) {
      let lightName = kebabCase(item.name);
      let darkName = kebabCase(item.name);
      if (!isolateDarkToken) {
        lightName = 'light-' + lightName;
        darkName = 'dark-' + darkName;
      }
      let prefix = '--';
      if (codeType === 'less') prefix = '@';
      if (codeType === 'scss') prefix = '$';
      const light = item.light.map((c, index) => `${prefix}${lightName}-color-${index + 1}: ${c};`);
      const lightA = item.lightA.map(
        (c, index) => `${prefix}${lightName}-color-${index + 1}-alpha: ${c};`,
      );
      const dark = item.dark.map((c, index) => `${prefix}${darkName}-color-${index + 1}: ${c};`);
      const darkA = item.darkA.map(
        (c, index) => `${prefix}${darkName}-color-${index + 1}-alpha: ${c};`,
      );
      tokenLightList = [...tokenLightList, ...light, ...lightA];
      tokenDarkList = [...tokenDarkList, ...dark, ...darkA];
    }
    content = [...tokenLightList, ...tokenDarkList].join('\n');
  }

  return (
    <CodeView>
      <Highlighter background={false} language={codeType}>
        {String(content)}
      </Highlighter>
    </CodeView>
  );
});

export default TokenView;
