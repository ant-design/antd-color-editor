import { memo } from 'react'
import { kebabCase, camelCase } from 'lodash-es'
import { usePrettier, getAlphaColor, colorTypeFormat } from '@/index'
import { CodeView } from '@/styles'
import type { IScales } from '@/ColorStudio/config'
import { DumiSiteProvider, Highlighter } from 'dumi-theme-antd-style'
export interface ITokenView {
  config: {
    colorType: 'mix' | 'hex' | 'rgb' | 'hsl'
    codeType: 'css' | 'less' | 'scss' | 'js'
    isolateDarkToken: boolean
  }
  data: {
    name: string
    scales: IScales
  }[]
}

const TokenView = memo<ITokenView>(({ data, config }) => {
  const { format } = usePrettier()
  const { colorType, codeType, isolateDarkToken }: any = config
  const tokenData = data.map((item) => ({
    name: item.name,
    light: item.scales.light.map((s) => colorTypeFormat(s, colorType)),
    lightA: item.scales.light.map((s) => colorTypeFormat(getAlphaColor(s, '#fff'), colorType)),
    dark: item.scales.dark.map((s) => colorTypeFormat(s, colorType)),
    darkA: item.scales.dark.map((s) => colorTypeFormat(getAlphaColor(s, '#000'), colorType)),
  }))

  let content = null

  if (codeType === 'js') {
    if (isolateDarkToken) {
      const objLight: any = {}
      const objDark: any = {}
      tokenData.forEach((item) => {
        objLight[camelCase(item.name)] = {
          solid: item.light,
          alpha: item.lightA,
        }
        objDark[camelCase(item.name)] = {
          solid: item.dark,
          alpha: item.darkA,
        }
      })

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

        export const LightTheme:ColorScales = ${JSON.stringify(objLight)}

        export const DarkTheme:ColorScales = ${JSON.stringify(objDark)}
      `
    } else {
      const obj: any = {}
      tokenData.forEach((item) => {
        obj[camelCase(item.name)] = {
          light: item.light,
          lightA: item.lightA,
          dark: item.dark,
          darkA: item.darkA,
        }
      })

      content = `
        export interface ColorScaleItem {
          light: string[],
          lightA: string[],
          dark: string[],
          darkA: string[],
        }

        export interface ColorScales {
          ${Object.keys(obj)
            .map((key) => `${key}: IScale;`)
            .join('\n')}
        }

        export const Theme:ColorScales = ${JSON.stringify(obj)}
      `
    }
    content = format(content)
  } else {
    let tokenLightList = isolateDarkToken ? [`/* light.${codeType} */`] : []
    let tokenDarkList = isolateDarkToken ? ['\n', `/* dark.${codeType} */`] : []
    tokenData.forEach((item) => {
      let lightName = kebabCase(item.name)
      let darkName = kebabCase(item.name)
      if (!isolateDarkToken) {
        lightName = 'light-' + lightName
        darkName = 'dark-' + darkName
      }
      let prefix = '--'
      if (codeType === 'less') prefix = '@'
      if (codeType === 'scss') prefix = '$'
      const light = item.light.map((c, index) => `${prefix}${lightName}-color-${index + 1}: ${c};`)
      const lightA = item.lightA.map((c, index) => `${prefix}${lightName}-color-${index + 1}-alpha: ${c};`)
      const dark = item.dark.map((c, index) => `${prefix}${darkName}-color-${index + 1}: ${c};`)
      const darkA = item.darkA.map((c, index) => `${prefix}${darkName}-color-${index + 1}-alpha: ${c};`)
      tokenLightList = [...tokenLightList, ...light, ...lightA]
      tokenDarkList = [...tokenDarkList, ...dark, ...darkA]
    })
    content = [...tokenLightList, ...tokenDarkList].join('\n')
  }
  return (
    <CodeView>
      <DumiSiteProvider>
        <Highlighter background={false} language={codeType}>
          {content}
        </Highlighter>
      </DumiSiteProvider>
    </CodeView>
  )
})

export default TokenView
