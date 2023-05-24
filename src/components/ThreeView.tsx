import React, { Suspense, useRef } from 'react'
import { Environment, OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import type { IScales } from '@/ColorStudio/config'
import { GenColor3D } from '@/index'

const cube = [
  'https://gw.alipayobjects.com/zos/antfincdn/A2UP6WYMLw/px.png',
  'https://gw.alipayobjects.com/zos/antfincdn/YrnP3LArEC/nx.png',
  'https://gw.alipayobjects.com/zos/antfincdn/TFxGCynnr3/py.png',
  'https://gw.alipayobjects.com/zos/antfincdn/0xv2XBW3oq/ny.png',
  'https://gw.alipayobjects.com/zos/antfincdn/wbdSuRHSRo/pz.png',
  'https://gw.alipayobjects.com/zos/antfincdn/pzB8izsxKd/nz.png',
]

interface IThreeView {
  config: {
    colorType: 'mix' | 'hex' | 'hct' | 'rgb' | 'hsl' | 'hsv' | 'cts'
    darkMode: boolean
    threeZoom: number
    autoRotate: boolean
    showFloor: boolean
    hueZoom: number
  }
  data: {
    name: string
    scales: IScales
  }[]
}

const ThreeView: React.FC<IThreeView> = ({ config, data }) => {
  const ref = useRef()
  const { colorType, darkMode, threeZoom, autoRotate, showFloor, hueZoom } = config
  return (
    <Canvas
      gl={{ preserveDrawingBuffer: true }}
      shadows
      camera={{ position: [0, 0, 0], fov: 55 }}
      style={{ width: '100%', height: '100%', background: darkMode ? '#222' : '#f1f1f1' }}
    >
      <Suspense fallback={null}>
        <Stage environment={null} controls={ref} shadows adjustCamera>
          <Environment files={cube} />
          {data.map((item) => (
            <GenColor3D
              key={item.name}
              name={item.name}
              colorType={colorType}
              scale={darkMode ? item.scales.dark : item.scales.light}
              zoom={threeZoom}
              darkMode={darkMode}
              hueZoom={hueZoom}
            />
          ))}
        </Stage>
      </Suspense>
      {showFloor && (
        <gridHelper
          /* eslint-disable-next-line react/no-unknown-property */
          args={[1000, 50, darkMode ? '#444' : '#ccc', darkMode ? '#333' : '#ddd']}
          /* eslint-disable-next-line react/no-unknown-property */
          position={[0, -1, 0]}
          /* eslint-disable-next-line react/no-unknown-property */
          castShadow={false}
          /* eslint-disable-next-line react/no-unknown-property */
          receiveShadow={false}
        />
      )}
      <OrbitControls makeDefault autoRotate={autoRotate} ref={ref} />
    </Canvas>
  )
}

export default React.memo(ThreeView)
