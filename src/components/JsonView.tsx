import React from 'react'
import { Highlight } from '@ant-design/pro-editor'
import { CodeView } from '@/styles'

interface IJsonView {
  data: any
}

const JsonView: React.FC<IJsonView> = ({ data }) => {
  return (
    <CodeView>
      <Highlight language="json" theme="dark">
        {data}
      </Highlight>
    </CodeView>
  )
}

export default React.memo(JsonView)
