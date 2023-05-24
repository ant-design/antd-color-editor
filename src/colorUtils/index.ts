import { argbFromHex, Hct, hexFromArgb } from '@material/material-color-utilities'
import chroma from 'chroma-js'

export const hexToHct: any = (hex: string): number[] => {
  const hclColor: any = Hct.fromInt(argbFromHex(hex))
  return [hclColor.hue, hclColor.chroma, hclColor.tone]
}

export const hctToHex = (hct: number[]): string => {
  const hctColor: any = Hct.from(hct[0], hct[1], hct[2])
  return hexFromArgb(hctColor.toInt())
}

export const toHctString = (hex: string, alpha?: boolean): string => {
  if (!alpha) {
    const hctColor = hexToHct(hex)
    return `hct(${hctColor.map((c) => Math.round(c)).join(',')})`
  } else {
    const [r, g, b, a] = chroma(hex).rgba()
    const newHex = chroma.rgb(r, g, b).hex()
    const hctColor = hexToHct(newHex)
    return `hcta(${hctColor.map((c) => Math.round(c)).join(',')},${a})`
  }
}

export const toCtsString = (color1: string, color2: string, alpha?: boolean): string => {
  let text
  if (!alpha) {
    text = chroma.contrast(color1, color2).toFixed(2)
    text = 'cts(' + text + ')'
  } else {
    text = 'cts(--)'
  }
  return text
}
