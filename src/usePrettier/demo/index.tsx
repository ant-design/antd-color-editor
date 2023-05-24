import React from 'react'
import { usePrettier } from 'kitchen-color-studio'

export default () => {
  const { format } = usePrettier()
  const content = `export const menus = {components: [{title: '装配器',
        children: ['Studio'],},{
            title: '面板模块',children: ['HctPicker', 
'ScalePreview', 'ScaleBlock', 
            'ScaleRow'],},{
        title: '工具类',children: ['useSketchJSON', 
            'useDownload'],
      },],};`

  return (
    <div>
      <h2>Before</h2>
      <pre>
        <code>{content}</code>
      </pre>
      <h2>After</h2>
      <pre>
        <code>{format(content)}</code>
      </pre>
    </div>
  )
}
