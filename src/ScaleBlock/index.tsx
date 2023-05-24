import React from 'react'
import styled from 'styled-components'
import { Space } from 'antd'
import { ScaleRow, getAlphaColor } from '@/index'
import type { IScales } from '@/ColorStudio/config'

const ScaleBox = styled.div`
  cursor: pointer;

  position: relative;

  width: 48px;
  height: 32px;

  background-position: 0 0, 0 8px, 8px -8px, -8px 0;
  background-size: 16px 16px;
  &:active {
    transform: scale(0.95);
  }
`

const ScaleItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
`

const ScaleRowTitle = styled.div`
  display: flex;
  align-items: center;
  width: 64px;
  height: 32px;
`

const Text = styled.div`
  opacity: 0.5;
`

const ColorView = styled.div`
  padding: 8px 16px 32px 0;
`

const View = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`

interface IScaleProps {
  scale: IScales
  colorType?: 'mix' | 'hex' | 'hct' | 'rgb' | 'hsl' | 'hsv' | 'cts'
  showDetail?: boolean
  darkMode?: boolean
  highLights?: number[]
  midHighLight?: number
  isFliterStep?: boolean
}

const Scale: React.FC<IScaleProps> = ({
  scale,
  colorType = 'hex',
  showDetail,
  darkMode,
  highLights,
  midHighLight,
  isFliterStep,
}) => {
  return (
    <View style={{ background: darkMode ? '#000' : '#FFF', color: darkMode ? '#fff' : '#000' }}>
      <ColorView>
        <Space direction={showDetail ? 'horizontal' : 'vertical'} size={2}>
          <Space direction={!showDetail ? 'horizontal' : 'vertical'} key="scale-title" size={2}>
            <ScaleRowTitle key="scale-num" style={showDetail ? { width: 32 } : {}} />
            {new Array(scale.light.length).fill('').map((_, index) => {
              const isHighlight = highLights?.includes(index)
              const isMidHighlight = midHighLight === index
              return (
                <ScaleBox key={'num' + index} style={showDetail ? { width: 32 } : {}}>
                  <ScaleItem>
                    <Text
                      style={{
                        opacity: isFliterStep ? (isHighlight ? 1 : 0.1) : 0.5,
                        fontWeight: isMidHighlight ? 700 : 400,
                      }}
                    >
                      {index + 1}
                    </Text>
                  </ScaleItem>
                </ScaleBox>
              )
            })}
          </Space>
          <ScaleRow key="light" title="light" scale={scale.light} colorType={colorType} showDetail={showDetail} />
          <ScaleRow
            key="lightA"
            title="lightA"
            scale={scale.light.map((c) => getAlphaColor(c, '#fff'))}
            solidScale={scale.light}
            colorType={colorType}
            showDetail={showDetail}
            alpha
          />
          <ScaleRow key="dark" title="dark" scale={scale.dark} colorType={colorType} showDetail={showDetail} />
          <ScaleRow
            key="darkA"
            title="darkA"
            scale={scale.dark.map((c) => getAlphaColor(c, '#000'))}
            solidScale={scale.dark}
            colorType={colorType}
            showDetail={showDetail}
            alpha
          />
        </Space>
      </ColorView>
    </View>
  )
}

export default React.memo(Scale)
