import React, { useRef } from 'react'
import styled from 'styled-components'
import { CollapseTitle } from '@ant-design/pro-editor'
import { Space } from 'antd'
import { SketchOutlined } from '@ant-design/icons'
import { ActionIcon } from '@ant-design/pro-editor'
import { ScaleBlock, useSketchJSON, AccessibilityTag, genScaleTestList } from '@/index'
import type { IScales, IEditorConfig } from '@/ColorStudio/config'
import { defaultEditorConfig } from '@/ColorStudio/config'
import type { ISchemaItem } from '@/components'
const Collapse: any = CollapseTitle

const CollapseView = styled.div<{ darkMode: boolean }>`
  .tech-studio-collapse-title {
    margin-bottom: 8px;
    background: ${({ darkMode }) => (darkMode ? '#000' : '#fff')};
    border-radius: 4px !important;
  }
  .tech-studio-collapse-title-collapsed,
  .tech-studio-collapse-title-expand {
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
    color: ${({ darkMode }) => (darkMode ? '#fff' : '#000')};
  }
  .ant-divider {
    border-color: ${({ darkMode }) => (darkMode ? 'rgba(255,255,255,.12)' : 'rgba(0,0,0,.06)')};
  }
`

const ColorAvatar = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  border-radius: 3px;
`

export interface IScalePreviewProps {
  color?: ISchemaItem
  config?: IEditorConfig
  displayConfig?: any
  scales: IScales
}

const ScalePreview: React.FC<IScalePreviewProps> = ({
  color = {
    title: 'nuname',
    type: 'normal',
    color: '#1677FF',
  },
  config = defaultEditorConfig,
  displayConfig = {
    colorType: 'hex',
    showDetail: false,
    darkMode: false,
  },
  scales,
}) => {
  const { generateGroup } = useSketchJSON()
  const ref = useRef()
  const { system, stepFliter, generate } = config
  const { pattern } = system
  const { colorType, showDetail, darkMode } = displayConfig

  const colorsTest: any = genScaleTestList(scales, [color.color, color.darkColor])

  return (
    <CollapseView darkMode={darkMode}>
      <Collapse
        extra={() => (
          <Space>
            <ActionIcon
              style={{ color: darkMode ? 'rgba(255,255,255,.5)' : 'rgba(0,0,0,.25)' }}
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
            darkMode={darkMode}
            isFliterStep={pattern.isFliterStep && !pattern.displayFliterStep}
            highLights={pattern.isFliterStep ? stepFliter : []}
            midHighLight={generate.step.up}
          />
        </div>
      </Collapse>
    </CollapseView>
  )
}

export default ScalePreview
