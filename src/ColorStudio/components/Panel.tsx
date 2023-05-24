import { memo } from 'react'
import { Collapse } from 'antd'
import { TriangleRightIcon, TriangleDownIcon } from '@radix-ui/react-icons'
import { levaLightTheme } from '@/index'
import { LevaPanel as Leva } from 'leva'

const CollapsePanel = memo((props: any) => {
  return (
    <Collapse
      {...props}
      ghost
      expandIconPosition="end"
      expandIcon={({ isActive }) =>
        isActive ? <TriangleDownIcon style={{ opacity: 0.5 }} /> : <TriangleRightIcon style={{ opacity: 0.5 }} />
      }
    />
  )
})

const LevaPanel = memo(({ store }: any) => <Leva fill flat store={store} titleBar={false} theme={levaLightTheme} />)

const Panel = Collapse.Panel
export { CollapsePanel, Panel, LevaPanel }
