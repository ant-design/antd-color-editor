import { Center, Environment, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useTheme, useThemeMode } from 'antd-style';
import { Suspense, memo, useRef } from 'react';

import type { IScales } from '@/genScales';
import { GenColor3D } from '@/index';

const cube = [
  'https://gw.alipayobjects.com/zos/antfincdn/A2UP6WYMLw/px.png',
  'https://gw.alipayobjects.com/zos/antfincdn/YrnP3LArEC/nx.png',
  'https://gw.alipayobjects.com/zos/antfincdn/TFxGCynnr3/py.png',
  'https://gw.alipayobjects.com/zos/antfincdn/0xv2XBW3oq/ny.png',
  'https://gw.alipayobjects.com/zos/antfincdn/wbdSuRHSRo/pz.png',
  'https://gw.alipayobjects.com/zos/antfincdn/pzB8izsxKd/nz.png',
];

export interface IThreeView {
  config: {
    autoRotate: boolean;
    colorType: 'mix' | 'hex' | 'hct' | 'rgb' | 'hsl' | 'hsv' | 'cts';
    hueZoom: number;
    showFloor: boolean;
    threeZoom: number;
  };
  data: {
    name: string;
    scales: IScales;
  }[];
}

const ThreeView = memo<IThreeView>(({ config, data }) => {
  const { isDarkMode } = useThemeMode();
  const theme = useTheme();
  const ref: any = useRef();
  const { colorType, threeZoom, autoRotate, showFloor, hueZoom } = config;

  return (
    <Canvas style={{ background: isDarkMode ? '#222' : '#f1f1f1', height: '100%', width: '100%' }}>
      <Suspense fallback={null}>
        <Environment files={cube} />
        <ambientLight />
        <Center scale={0.02}>
          {data.map((item) => (
            <GenColor3D
              colorType={colorType}
              hueZoom={hueZoom}
              key={item.name}
              name={item.name}
              scale={isDarkMode ? item.scales.dark : item.scales.light}
              zoom={threeZoom}
            />
          ))}
        </Center>
      </Suspense>
      {showFloor && (
        <gridHelper
          /* eslint-disable-next-line react/no-unknown-property */
          args={[25, 100, theme.colorBorderSecondary, theme.colorBorder]}
          /* eslint-disable-next-line react/no-unknown-property */
          castShadow={false}
          /* eslint-disable-next-line react/no-unknown-property */
          position={[0, -1, 0]}
          /* eslint-disable-next-line react/no-unknown-property */
          receiveShadow={false}
        />
      )}
      <OrbitControls autoRotate={autoRotate} makeDefault ref={ref} />
    </Canvas>
  );
});

export default ThreeView;
