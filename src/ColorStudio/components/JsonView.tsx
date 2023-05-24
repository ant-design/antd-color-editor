import { memo } from 'react'
import { DumiSiteProvider, Highlighter } from 'dumi-theme-antd-style'
import { CodeView } from '@/styles'

export interface IJsonView {
  data: any
}

const JsonView = memo<IJsonView>(({ data }) => {
  return (
    <CodeView>
      <DumiSiteProvider>
        <Highlighter background={false} language="json">
          {JSON.stringify(data, null, 4)}
        </Highlighter>
      </DumiSiteProvider>
    </CodeView>
  )
})

export default JsonView
