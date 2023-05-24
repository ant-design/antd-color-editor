import React, { useRef } from 'react'
import { useSketchJSON } from 'kitchen-color-studio'
import { Space, Button } from 'antd'

export default () => {
  const ref = useRef()
  const { generateGroup, generateSymbol } = useSketchJSON()
  return (
    <div>
      <div ref={ref} style={{ width: 100, height: 100, background: 'blue', marginBottom: 24 }} />
      <Space>
        <Button type="primary" onClick={() => generateGroup(ref.current)}>
          复制为 Sketch 图层
        </Button>
        <Button onClick={() => generateSymbol(ref.current)}>复制为 Sketch 组件</Button>
      </Space>
    </div>
  )
}
