import { TinyColor } from '@ctrl/tinycolor';
import chroma from 'chroma-js';

import { toCtsString, toHctString } from '@/utils/colorUtils';

const colorTypeFormat = (
  color: string,
  colorType: 'mix' | 'hex' | 'hct' | 'rgb' | 'hsl' | 'hsv' | 'cts',
  isDark?: boolean,
): string => {
  let text = color;
  const alpha = chroma(color).alpha() !== 1;
  const c: TinyColor = new TinyColor(color);
  switch (colorType) {
    case 'mix': {
      text = alpha ? c.toRgbString() : c.toHexString(false);
      break;
    }
    case 'hex': {
      text = alpha ? c.toHex8String(false) : c.toHexString(false);
      break;
    }
    case 'hct': {
      text = toHctString(color, alpha);
      break;
    }
    case 'rgb': {
      text = c.toRgbString();
      break;
    }
    case 'hsl': {
      text = c.toHslString();
      break;
    }
    case 'hsv': {
      text = c.toHsvString();
      break;
    }
    case 'cts': {
      text = toCtsString(color, isDark ? '#000' : '#fff', alpha);
      break;
    }
    default: {
      break;
    }
  }
  return text;
};

export default colorTypeFormat;
