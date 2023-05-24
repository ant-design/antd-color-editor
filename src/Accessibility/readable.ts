import { isReadable, readability } from '@ctrl/tinycolor'

const genShield = (result: 'AAA' | 'AA' | 'Fail'): string => {
  if (result === 'AAA') return 'https://gw.alipayobjects.com/zos/antfincdn/%26v4N7EPfwD/aaa.svg'
  if (result === 'AA') return 'https://gw.alipayobjects.com/zos/antfincdn/AiDCarDp5o/aa.svg'
  return ' https://gw.alipayobjects.com/zos/antfincdn/2X4RlcXBHX/fail.svg'
}

export interface IReadable {
  result: 'AAA' | 'AA' | 'Fail'
  shield: string
  cts: string
  aa: boolean
  aaa: boolean
  aaSmall: boolean
  aaLarge: boolean
  aaaSmall: boolean
  aaaLarge: boolean
}

export const readable = (color1: string, color2: string): IReadable => {
  const aaSmall = isReadable(color1, color2, { level: 'AA', size: 'small' })
  const aaLarge = isReadable(color1, color2, { level: 'AA', size: 'large' })
  const aaaSmall = isReadable(color1, color2, { level: 'AAA', size: 'small' })
  const aaaLarge = isReadable(color1, color2, { level: 'AAA', size: 'large' })
  const aa = aaSmall || aaLarge
  const aaa = aaaSmall || aaaLarge
  const result = aaa ? 'AAA' : aa ? 'AA' : 'Fail'
  return {
    result,
    shield: genShield(result),
    cts: readability(color1, color2).toFixed(2),
    aa,
    aaa,
    aaSmall,
    aaLarge,
    aaaSmall,
    aaaLarge,
  }
}
