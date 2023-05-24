import React from 'react'
import { CollapsePanel, Panel } from '@/index'

export interface IPanel {
  header: string
  panel: React.ReactNode
  hidden?: boolean | any
}

export interface IPanelGroup {
  panels: IPanel[]
}

const PanelGroup: React.FC<IPanelGroup> = ({ panels }) => {
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
}

export default React.memo(PanelGroup)
