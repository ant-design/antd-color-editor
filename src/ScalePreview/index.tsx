import { SketchOutlined } from '@ant-design/icons';
import { ActionIcon, CollapseTitle } from '@ant-design/pro-editor';
import { Space } from 'antd';
import { useThemeMode } from 'antd-style';
import { memo, useRef } from 'react';
import type { IEditorConfig, IScales } from 'src/genScalesByConfig';
import { defaultEditorConfig } from 'src/genScalesByConfig';
import styled from 'styled-components';

import type { ISchemaItem } from '@/ColorStudio/components';
import { AccessibilityTag, ScaleBlock, genScaleTestList, useSketchJSON } from '@/index';

const Collapse: any = CollapseTitle;

/******************************************************
 *********************** Style *************************
 ******************************************************/

const CollapseView = styled.div<{ isDarkMode: boolean }>`
  .studio-collapse-title {
    overflow: auto;
    background: ${({ theme }) => theme.colorBgContainer};
    border-radius: ${({ theme }) => theme.borderRadius}px !important;
  }

  .studio-collapse-title-collapsed,
  .studio-collapse-title-expand {
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
  }

  .studio-divider {
    margin-top: 8px !important;
    border-color: ${({ theme }) => theme.colorBorderSecondary};
  }
`;

const ColorAvatar = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  border-radius: 3px;
`;

/******************************************************
 ************************* Dom *************************
 ******************************************************/

export interface IScalePreview {
  color?: ISchemaItem;
  config?: IEditorConfig;
  displayConfig?: any;
  scales: IScales;
}

const ScalePreview = memo<IScalePreview>(
  ({
    color = {
      color: '#1677FF',
      title: 'nuname',
      type: 'normal',
    },
    config = defaultEditorConfig,
    displayConfig = {
      colorType: 'hex',
      showDetail: false,
    },
    scales,
  }) => {
    const { isDarkMode } = useThemeMode();
    const { generateGroup } = useSketchJSON();
    const ref: any = useRef();
    const { system, stepFliter, generate } = config;
    const { pattern } = system;
    const { colorType, showDetail } = displayConfig;
    const colorsTest: any = genScaleTestList(scales, [
      color.color,
      color?.darkColor || color.color,
    ]);

    return (
      <CollapseView isDarkMode={isDarkMode}>
        <Collapse
          defaultExpand
          extra={() => (
            <Space>
              <ActionIcon
                icon={<SketchOutlined />}
                onClick={() => generateGroup(ref.current)}
                title={'复制为 Sketch 素材贴'}
              />
              {scales.dark.length >= 3 && <AccessibilityTag colors={colorsTest} />}
            </Space>
          )}
          title={
            <Space align="center" size={4}>
              <ColorAvatar style={{ background: color.color }} />
              {pattern.isolateDark && <ColorAvatar style={{ background: color.darkColor }} />}
              {color.title}
            </Space>
          }
        >
          <div ref={ref}>
            <ScaleBlock
              colorType={colorType}
              highLights={pattern.isFliterStep ? stepFliter : []}
              isFliterStep={pattern.isFliterStep && !pattern.displayFliterStep}
              midHighLight={generate.step.up}
              scale={scales}
              showDetail={showDetail}
            />
          </div>
        </Collapse>
      </CollapseView>
    );
  },
);

export default ScalePreview;
