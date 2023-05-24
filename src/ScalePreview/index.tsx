import { memo, useRef } from 'react'
import styled from 'styled-components'
import { CollapseTitle } from '@ant-design/pro-editor'
import { Space } from 'antd'
import { SketchOutlined } from '@ant-design/icons'
import { ActionIcon } from '@ant-design/pro-editor'
import { ScaleBlock, useSketchJSON, AccessibilityTag, genScaleTestList } from '@/index'
import type { IScales, IEditorConfig } from '@/ColorStudio/config'
import { defaultEditorConfig } from '@/ColorStudio/config'
import type { ISchemaItem } from '@/ColorStudio/components'
import { useThemeMode } from 'antd-style'
const Collapse: any = CollapseTitle

/******************************************************
 *********************** Style *************************
 ******************************************************/

const CollapseView = styled.div<{ isDarkMode: boolean }>`
  .studio-collapse-title {
    overflow: auto;
    margin-bottom: 8px;
    padding-top: 8px;
    border-radius: 4px !important;
  }
  .studio-collapse-title-collapsed,
  .studio-collapse-title-expand {
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
  }
  .studio-divider {
    margin-top: 8px !important;
    border-color: ${({ theme }) => theme.colorBorder};
  }
`

const ColorAvatar = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  border-radius: 3px;
`

/******************************************************
 ************************* Dom *************************
 ******************************************************/

export interface IScalePreview {
  color?: ISchemaItem
  config?: IEditorConfig
  displayConfig?: any
  scales: IScales
}

const ScalePreview = memo<IScalePreview>(
  ({
    color = {
      title: 'nuname',
      type: 'normal',
      color: '#1677FF',
    },
    config = defaultEditorConfig,
    displayConfig = {
      colorType: 'hex',
      showDetail: false,
    },
    scales,
  }) => {
    const { isDarkMode } = useThemeMode()
    const { generateGroup } = useSketchJSON()
    const ref: any = useRef()
    const { system, stepFliter, generate } = config
    const { pattern } = system
    const { colorType, showDetail } = displayConfig
    const colorsTest: any = genScaleTestList(scales, [color.color, color?.darkColor || color.color])

    return (
      <CollapseView isDarkMode={isDarkMode}>
        <Collapse
          extra={() => (
            <Space>
              <ActionIcon
                title={'复制为 Sketch 素材贴'}
                icon={<SketchOutlined />}
                onClick={() => generateGroup(ref.current)}
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
          defaultExpand
        >
          <div ref={ref}>
            <ScaleBlock
              scale={scales}
              colorType={colorType}
              showDetail={showDetail}
              isFliterStep={pattern.isFliterStep && !pattern.displayFliterStep}
              highLights={pattern.isFliterStep ? stepFliter : []}
              midHighLight={generate.step.up}
            />
          </div>
        </Collapse>
      </CollapseView>
    )
  }
)

export default ScalePreview
