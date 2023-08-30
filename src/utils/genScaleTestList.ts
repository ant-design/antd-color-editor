import { IScales } from '@/ColorStudio/config';

const genScaleTestList = (scales: IScales, color: [string, string]): [string, string][] => {
  const lightColor = color[0];
  const darkColor = color[1] || color[0];
  const colorLength = scales.light.length - 1;
  const colorsTest: any = [
    [lightColor, '#fff'],
    [scales.light[colorLength], scales.light[0]],
    colorLength >= 4 && [scales.light[colorLength - 1], scales.light[1]],
    [scales.light[colorLength], lightColor],
    // dark
    [darkColor, '#000'],
    [scales.dark[colorLength], scales.dark[0]],
    scales.dark.length >= 4 && [scales.dark[colorLength - 1], scales.dark[1]],
    [scales.dark[colorLength], darkColor],
  ].filter(Boolean);
  return colorsTest;
};

export default genScaleTestList;
