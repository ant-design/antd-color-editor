import { useThemeMode } from 'antd-style';
import { useControls, useCreateStore } from 'leva';
import { memo } from 'react';
import styled from 'styled-components';

import type { IScales } from '@/genScalesByConfig';
import type { IPanel } from '@/index';
import { AccessBlock, AccessibilityTag, LevaPanel, PanelGroup, genScaleTestList } from '@/index';

/******************************************************
 *********************** Style *************************
 ******************************************************/

const PreviewView = styled.div`
  padding: 0 12px;
`;

const ColorAvatar = styled.div`
  display: inline-block;

  width: 24px;
  height: 24px;
  margin-right: 8px;

  border-radius: 3px;
`;

const SubShowcase = styled.div<{ color2: string }>`
  position: relative;

  margin-top: 4px;
  padding: 12px;

  background: ${({ color2 }) => color2};
  border: 1px solid ${({ theme }) => theme.colorBorderSecondary};
  border-radius: 4px;
`;

/******************************************************
 ************************* Dom *************************
 ******************************************************/

export interface IAccessPanel {
  data: {
    color: string;
    darkColor: string;
    name: string;
    scales: IScales;
  }[];
}

const AccessPanel = memo<IAccessPanel>(({ data }) => {
  const { isDarkMode } = useThemeMode();
  const accessStore = useCreateStore();
  const { color1, color2 } = useControls(
    {
      color1: {
        label: '前景色',
        value: '#1677FF',
      },
      color2: {
        label: '背景色',
        value: isDarkMode ? '#000e5e' : '#f9f9fe',
      },
    },
    { store: accessStore },
  );

  const demoPanel = (
    <>
      <LevaPanel store={accessStore} />
      <PreviewView>
        <AccessBlock color1={color1} color2={color2} />
        <SubShowcase color2={color2}>
          <div style={{ display: 'flex', height: 40, marginBottom: 12 }}>
            <div style={{ background: color1, flex: 1 }} />
            <div style={{ background: color1, flex: 1, opacity: 0.75 }} />
            <div style={{ background: color1, flex: 1, opacity: 0.5 }} />
            <div style={{ background: color1, flex: 1, opacity: 0.25 }} />
          </div>
          <div style={{ display: 'flex', height: 1, marginBottom: 12 }}>
            <div style={{ background: color1, flex: 1 }} />
            <div style={{ background: color1, flex: 1, opacity: 0.75 }} />
            <div style={{ background: color1, flex: 1, opacity: 0.5 }} />
            <div style={{ background: color1, flex: 1, opacity: 0.25 }} />
          </div>
          <div>
            <h1 style={{ color: color1, lineHeight: 1, textAlign: 'justify' }}>
              ABCDEFG0123456789
            </h1>
            <h2 style={{ color: color1, lineHeight: 1, textAlign: 'justify' }}>
              ABCDEFG0123456789
            </h2>
            <h3 style={{ color: color1, lineHeight: 1, textAlign: 'justify' }}>
              ABCDEFG0123456789
            </h3>
            <p style={{ color: color1, lineHeight: 1, textAlign: 'justify' }}>ABCDEFG0123456789</p>
          </div>
        </SubShowcase>
      </PreviewView>
    </>
  );

  const accessPanelGroup: IPanel[] = [
    {
      header: '可读性测试',
      panel: demoPanel,
    },
    {
      header: '色板测试列表',
      panel: data.map((item, index) => (
        <div
          key={index}
          style={{
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: 8,
            padding: '0 12px',
          }}
        >
          <div
            style={{
              alignItems: 'center',
              display: 'flex',
            }}
          >
            <ColorAvatar style={{ background: item.color }} />
            <div>{item.name}</div>
          </div>
          <AccessibilityTag colors={genScaleTestList(item.scales, [item.color, item.darkColor])} />
        </div>
      )),
    },
  ];

  return <PanelGroup panels={accessPanelGroup} />;
});

export default AccessPanel;
