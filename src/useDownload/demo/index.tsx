import { memo } from 'react'
import { useDownload } from 'kitchen-color-studio'
import { Button } from 'antd'

export default memo(() => {
  const data = {
    a: 111,
    b: 222,
  }
  const { setContent, startDownload } = useDownload()
  setContent(JSON.stringify(data), 'demo.json')
  return (
    <div>
      <div>{JSON.stringify(data)}</div>
      <Button onClick={startDownload}>生成并下载文件</Button>
    </div>
  )
})
