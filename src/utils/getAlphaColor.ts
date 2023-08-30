import chroma from 'chroma-js';

function isStableColor(color: number): boolean {
  return color >= 0 && color <= 255;
}

function arrayToRgb(rgbArray: number[]): string {
  return rgbArray.length < 4 ? `rgb(${rgbArray.join(',')})` : `rgba(${rgbArray.join(',')})`;
}

function getAlphaColor(frontColor: string, backgroundColor: string): string {
  const [fR, fG, fB] = chroma(frontColor).rgb();
  const [bR, bG, bB] = chroma(backgroundColor).rgb();

  for (let fA = 0.01; fA <= 1; fA += 0.01) {
    const r = Math.round((fR - bR * (1 - fA)) / fA);
    const g = Math.round((fG - bG * (1 - fA)) / fA);
    const b = Math.round((fB - bB * (1 - fA)) / fA);
    if (isStableColor(r) && isStableColor(g) && isStableColor(b))
      return chroma(arrayToRgb([r, g, b, Math.round(fA * 100) / 100])).hex();
  }
  return chroma(arrayToRgb([fR, fG, fB, 1])).hex();
}
export default getAlphaColor;
