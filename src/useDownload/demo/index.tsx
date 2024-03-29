import { Button } from 'antd';
import { useDownload } from 'antd-color-editor';
import { memo } from 'react';

export default memo(() => {
  const data = {
    a: 111,
    b: 222,
  };
  const { setContent, startDownload } = useDownload();
  setContent(JSON.stringify(data), 'demo.json');
  return (
    <div>
      <div>{JSON.stringify(data)}</div>
      <Button onClick={startDownload}>生成并下载文件</Button>
    </div>
  );
});
