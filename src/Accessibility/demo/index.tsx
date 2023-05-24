import { Accessibility, readable } from 'kitchen-color-studio'
import { useControls, Leva } from 'leva'
import { Space } from 'antd'

export default () => {
  const { color1, color2 } = useControls({
    color1: '#1677FF',
    color2: '#001355',
  })

  const result = readable(color1, color2)

  return (
    <Space size={24} align="start">
      <Space direction="vertical">
        <Accessibility color1={color1} color2={color2} />
        <pre>
          <code>{JSON.stringify(result, null, 4)}</code>
        </pre>
      </Space>
      <Leva fill />
    </Space>
  )
}
