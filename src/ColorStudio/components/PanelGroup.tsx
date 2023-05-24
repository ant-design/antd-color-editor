import { memo, ReactNode } from 'react'
import { CollapsePanel, Panel } from '@/index'

export interface IPanel {
  header: string
  panel: ReactNode
  hidden?: boolean | any
}

export interface IPanelGroup {
  panels: IPanel[]
}

const PanelGroup = memo<IPanelGroup>(({ panels }) => {
  return (
    <CollapsePanel defaultActiveKey={panels.map((_, index) => index)}>
      {panels
        .filter((p) => !p.hidden)
        .map((p, index) => (
          <Panel header={p.header} key={index}>
            {p.panel}
          </Panel>
        ))}
    </CollapsePanel>
  )
})

export default PanelGroup
