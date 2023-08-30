import { Space } from 'antd';
import { Accessibility, readable } from 'antd-color-editor';
import { LevaPanel, useControls, useCreateStore } from 'leva';

export default () => {
  const store = useCreateStore();
  const { color1, color2 } = useControls(
    {
      color1: '#1677FF',
      color2: '#001355',
    },
    { store },
  );

  const result = readable(color1, color2);

  return (
    <Space
      direction="vertical"
      style={{ background: 'var(--leva-colors-elevation2)', padding: 16 }}
    >
      <Space align="start">
        <LevaPanel fill flat store={store} titleBar={false} />
        <Accessibility color1={color1} color2={color2} />
      </Space>
      <pre>
        <code>{JSON.stringify(result, null, 4)}</code>
      </pre>
    </Space>
  );
};
