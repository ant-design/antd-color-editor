import { Accessibility, readable } from 'kitchen-color-studio'
import { useControls, LevaPanel, useCreateStore } from 'leva'
import { Space } from 'antd'

export default () => {
  const store = useCreateStore()
  const { color1, color2 } = useControls(
    {
      color1: '#1677FF',
      color2: '#001355',
    },
    { store }
  )

  const result = readable(color1, color2)

  return (
    <Space direction="vertical" style={{ background: 'var(--leva-colors-elevation2)', padding: 16 }}>
      <Space align="start">
        <LevaPanel fill flat titleBar={false} store={store} />
        <Accessibility color1={color1} color2={color2} />
      </Space>
      <pre>
        <code>{JSON.stringify(result, null, 4)}</code>
      </pre>
    </Space>
  )
}
