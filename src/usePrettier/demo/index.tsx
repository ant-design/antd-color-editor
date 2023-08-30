import { usePrettier } from 'antd-color-editor';
import { memo, useEffect, useState } from 'react';

export default memo(() => {
  const [codeContent, setCodeContent] = useState<string>('');
  const { format } = usePrettier();
  const content = `export const menus = {components: [{title: '装配器',
        children: ['Studio'],},{
            title: '面板模块',children: ['HctPicker',
'ScalePreview', 'ScaleBlock',
            'ScaleRow'],},{
        title: '工具类',children: ['useSketchJSON',
            'useDownload'],
      },],};`;

  useEffect(() => {
    format(content).then((data) => setCodeContent(data));
  });

  return (
    <div>
      <h2>Before</h2>
      <pre>
        <code>{content}</code>
      </pre>
      <h2>After</h2>
      <pre>
        <code>{codeContent}</code>
      </pre>
    </div>
  );
});
