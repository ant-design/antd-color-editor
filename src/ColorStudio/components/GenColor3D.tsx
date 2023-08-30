import { useThemeMode } from 'antd-style';
import chroma from 'chroma-js';
import { memo } from 'react';
import * as Three from 'three';

import { hexToHct } from '@/index';

export interface IGenColor3D {
  colorType: 'mix' | 'hex' | 'hct' | 'rgb' | 'hsl' | 'hsv' | 'cts';
  hueZoom: number;
  name: string;
  scale: string[];
  zoom: number;
}

const scalePositon = (pos: number[], zoomPos: number[]) => {
  const [x, y, z] = pos;
  const [xZoom, yZoom, zZoom] = zoomPos;
  return [x * xZoom, y * yZoom, z * zZoom];
};

// @ts-ignore
const GenColor3D = memo<IGenColor3D>(({ name, scale, colorType, zoom, hueZoom }) => {
  const { isDarkMode } = useThemeMode();

  const genPosition = (c: string, midC: string, num: number) => {
    let position: number[];
    switch (colorType) {
      case 'mix':
      case 'hex': {
        position = scalePositon([hexToHct(midC)[0], 1 - num, 0], [(1 / 3.6) * hueZoom, 100, 1]);
        break;
      }
      case 'cts': {
        position = scalePositon(
          [hexToHct(midC)[0], num, chroma.contrast(c, isDarkMode ? '#000' : '#fff')],
          [(1 / 3.6) * hueZoom, 100, 20],
        );
        break;
      }
      case 'rgb': {
        position = scalePositon(chroma(c).rgb(), [1 / 2.55, 1 / 2.55, 1 / 2.55]);
        break;
      }
      case 'hsl': {
        position = scalePositon(chroma(c).hsl(), [(1 / 3.6) * hueZoom, 100, 100]);
        position = [position[0], position[2], position[1]];
        break;
      }
      case 'hsv': {
        position = scalePositon(chroma(c).hsv(), [(1 / 3.6) * hueZoom, 100, 100]);
        position = [position[0], position[2], position[1]];
        break;
      }
      default: {
        position = scalePositon(hexToHct(c), [(1 / 3.6) * hueZoom, 1, 1]);
        position = [position[0], position[2], position[1]];
        break;
      }
    }
    return new Three.Vector3(...position);
  };

  return scale.map((c, index) => (
    <mesh
      key={name + index}
      /* eslint-disable-next-line react/no-unknown-property */
      position={genPosition(c, scale[Math.floor(scale.length / 2)], (index + 1) / scale.length)}
      scale={zoom}
    >
      <boxGeometry />
      <meshPhysicalMaterial color={c} />
    </mesh>
  ));
});

export default GenColor3D;
