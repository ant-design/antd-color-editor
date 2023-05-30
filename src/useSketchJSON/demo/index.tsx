import { Button, Space } from 'antd';
import { useSketchJSON } from 'kitchen-color-studio';
import { memo, useRef } from 'react';

export default memo(() => {
  const ref: any = useRef();
  const { generateGroup, generateSymbol } = useSketchJSON();
  return (
    <div>
      <div ref={ref} style={{ width: 100, height: 100, background: 'blue', marginBottom: 24 }} />
      <Space>
        <Button onClick={() => generateGroup(ref.current)} type="primary">
          复制为 Sketch 图层
        </Button>
        <Button onClick={() => generateSymbol(ref.current)}>复制为 Sketch 组件</Button>
      </Space>
    </div>
  );
});
