import { message, Space } from 'antd';
import { readableColor } from 'polished';
import { memo } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import styled from 'styled-components';

import { colorTypeFormat } from '@/index';

/******************************************************
 *********************** Style *************************
 ******************************************************/

const AlphaLightBg =
  'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABGdBTUEAALGPC/xhBQAAAFpJREFUWAntljEKADAIA23p6v//qQ+wfUEcCu1yriEgp0FHRJSJcnehmmWm1Dv/lO4HIg1AAAKjTqm03ea88zMCCEDgO4HV5bS757f+7wRoAAIQ4B9gByAAgQ3pfiDmXmAeEwAAAABJRU5ErkJggg==) 0% 0% / 26px';

const AlphaDarkBg =
  'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAABGdBTUEAALGPC/xhBQAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAIKADAAQAAAABAAAAIAAAAACPTkDJAAAAZUlEQVRIDe2VMQoAMAgDa9/g/1/oIzrpZBCh2dLFkkoDF0Fz99OdiOjks+2/7S8fRRmMMIVoRGSoYzvvqF8ZIMKlC1GhQBc6IkPzq32QmdAzkEGihpWOSPsAss8HegYySNSw0hE9WQ4StafZFqkAAAAASUVORK5CYII=) 0% 0% / 26px';

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

const ScaleBoxWide = styled(ScaleBox)`
  width: 180px;
  font-family: var(--leva-fonts-mono);
  font-size: var(--leva-fontSizes-root);
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

/******************************************************
 ************************* Dom *************************
 ******************************************************/

export interface IScaleRow {
  alpha?: boolean;
  colorType: 'mix' | 'hex' | 'hct' | 'rgb' | 'hsl' | 'hsv' | 'cts';
  scale: string[];
  showDetail?: boolean;
  solidScale?: string[];
  title: 'light' | 'lightA' | 'dark' | 'darkA';
}

const ScaleRow = memo<IScaleRow>(({ title, scale, solidScale, colorType, showDetail, alpha }) => {
  const isDark = title.includes('dark');
  let style = {};

  switch (title) {
    case 'lightA':
      style = { backgroundColor: '#fff', background: AlphaLightBg };
      break;
    case 'darkA':
      style = { backgroundColor: '#000', background: AlphaDarkBg };
      break;
    default:
      break;
  }

  return (
    <Space direction={!showDetail ? 'horizontal' : 'vertical'} size={2}>
      <ScaleRowTitle key="title" style={showDetail ? {} : { padding: 8 }}>
        <Text>{title}</Text>
      </ScaleRowTitle>
      {scale.map((color, index) => {
        if (!showDetail)
          return (
            <CopyToClipboard key={color} text={color}>
              <ScaleBox onClick={() => message.success(color)} style={style} title={color}>
                <ScaleItem style={{ backgroundColor: color }} />
              </ScaleBox>
            </CopyToClipboard>
          );
        // ------showDetail

        let text: string = colorTypeFormat(color, colorType, isDark);
        text = text.replace(/ /g, '');
        return (
          <CopyToClipboard key={color + index} text={text}>
            <ScaleBoxWide onClick={() => message.success(text)} style={style} title={color}>
              <ScaleItem
                style={{
                  backgroundColor: color,
                  color: readableColor(
                    String(alpha ? solidScale?.[index] : color),
                    alpha
                      ? solidScale?.[isDark ? 0 : solidScale.length - 1]
                      : scale[isDark ? 0 : scale.length - 1],
                    alpha
                      ? solidScale?.[isDark ? solidScale.length - 1 : 0]
                      : scale[isDark ? scale.length - 1 : 0],
                    true,
                  ),
                }}
              >
                <div>{text}</div>
              </ScaleItem>
            </ScaleBoxWide>
          </CopyToClipboard>
        );
      })}
    </Space>
  );
});

export default ScaleRow;
