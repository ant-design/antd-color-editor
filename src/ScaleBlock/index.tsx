import { Space } from 'antd';
import { memo } from 'react';
import styled from 'styled-components';

import type { IScales } from '@/ColorStudio/config';
import { getAlphaColor, ScaleRow } from '@/index';

/******************************************************
 *********************** Style *************************
 ******************************************************/

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
`;

const ScaleItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
`;

const ScaleRowTitle = styled.div`
  display: flex;
  align-items: center;
  width: 64px;
  height: 32px;
`;

const Text = styled.div`
  opacity: 0.5;
`;

const ColorView = styled.div`
  padding: 8px 16px 32px 0;
`;

const View = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

/******************************************************
 ************************* Dom *************************
 ******************************************************/

export interface IScaleBlock {
  colorType?: 'mix' | 'hex' | 'hct' | 'rgb' | 'hsl' | 'hsv' | 'cts';
  highLights?: number[];
  isFliterStep?: boolean;
  midHighLight?: number;
  scale: IScales;
  showDetail?: boolean;
}

const ScaleBlock = memo<IScaleBlock>(
  ({ scale, colorType = 'hex', showDetail, highLights, midHighLight, isFliterStep }) => {
    return (
      <View>
        <ColorView>
          <Space direction={showDetail ? 'horizontal' : 'vertical'} size={2}>
            <Space direction={!showDetail ? 'horizontal' : 'vertical'} key="scale-title" size={2}>
              <ScaleRowTitle key="scale-num" style={showDetail ? { width: 32 } : {}} />
              {new Array(scale.light.length).fill('').map((_, index) => {
                const isHighlight = highLights?.includes(index);
                const isMidHighlight = midHighLight === index;
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
                );
              })}
            </Space>
            <ScaleRow
              colorType={colorType}
              key="light"
              scale={scale.light}
              showDetail={showDetail}
              title="light"
            />
            <ScaleRow
              alpha
              colorType={colorType}
              key="lightA"
              scale={scale.light.map((c) => getAlphaColor(c, '#fff'))}
              showDetail={showDetail}
              solidScale={scale.light}
              title="lightA"
            />
            <ScaleRow
              colorType={colorType}
              key="dark"
              scale={scale.dark}
              showDetail={showDetail}
              title="dark"
            />
            <ScaleRow
              alpha
              colorType={colorType}
              key="darkA"
              scale={scale.dark.map((c) => getAlphaColor(c, '#000'))}
              showDetail={showDetail}
              solidScale={scale.dark}
              title="darkA"
            />
          </Space>
        </ColorView>
      </View>
    );
  },
);

export default ScaleBlock;
