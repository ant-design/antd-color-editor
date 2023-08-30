import { isReadable, readability } from '@ctrl/tinycolor';

const genShield = (result: 'AAA' | 'AA' | 'Fail'): string => {
  if (result === 'AAA') return 'https://gw.alipayobjects.com/zos/antfincdn/%26v4N7EPfwD/aaa.svg';
  if (result === 'AA') return 'https://gw.alipayobjects.com/zos/antfincdn/AiDCarDp5o/aa.svg';
  return ' https://gw.alipayobjects.com/zos/antfincdn/2X4RlcXBHX/fail.svg';
};

export interface IReadable {
  aa: boolean;
  aaLarge: boolean;
  aaSmall: boolean;
  aaa: boolean;
  aaaLarge: boolean;
  aaaSmall: boolean;
  cts: string;
  result: 'AAA' | 'AA' | 'Fail';
  shield: string;
}

export const readable = (color1: string, color2: string): IReadable => {
  const aaSmall = isReadable(color1, color2, { level: 'AA', size: 'small' });
  const aaLarge = isReadable(color1, color2, { level: 'AA', size: 'large' });
  const aaaSmall = isReadable(color1, color2, { level: 'AAA', size: 'small' });
  const aaaLarge = isReadable(color1, color2, { level: 'AAA', size: 'large' });
  const aa = aaSmall || aaLarge;
  const aaa = aaaSmall || aaaLarge;
  const result = aaa ? 'AAA' : aa ? 'AA' : 'Fail';
  return {
    aa,
    aaLarge,
    aaSmall,
    aaa,
    aaaLarge,
    aaaSmall,
    cts: readability(color1, color2).toFixed(2),
    result,
    shield: genShield(result),
  };
};
