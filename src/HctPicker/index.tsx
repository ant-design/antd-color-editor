import React, { useEffect, useState } from 'react'
import { useControls, LevaPanel, useCreateStore } from 'leva'
import styled from 'styled-components'
import { Popover } from 'antd'
import { hexToHct, hctToHex, levaLightTheme } from '@/index'

const ControlView = styled.div`
  width: 240px;
`

const ColorAvatar = styled.div`
  cursor: pointer;

  width: 24px;
  min-width: 24px;
  height: 24px;

  border-radius: 3px;
`

interface IHctPicker {
  color?: string
  onChange: (value?: any) => void
  listModify?: boolean
}

const HctPicker: React.FC<IHctPicker> = ({ color = '#1677FF', onChange, listModify }) => {
  const [visible, setVisible] = useState(false)
  const colorStore = useCreateStore()
  // @ts-ignore
  const [{ HEX }, set] = useControls(
    // @ts-ignore
    () => ({
      HCT: {
        value: hexToHct(color),
        min: 0,
        max: 360,
        step: 1,
        onChange: (v) => set({ HEX: hctToHex(v) }),
        transient: false,
      },
      HEX: {
        value: color,
        onChange: (v) => set({ HCT: hexToHct(v) }),
        transient: false,
      },
    }),
    { store: colorStore }
  )

  useEffect(() => {
    onChange(HEX)
  }, [HEX])

  return (
    <Popover
      content={
        <ControlView>
          <LevaPanel fill flat store={colorStore} titleBar={false} theme={levaLightTheme} />
        </ControlView>
      }
      trigger="click"
      open={visible}
      onOpenChange={setVisible}
    >
      <ColorAvatar onClick={() => listModify && set({ HEX: color })} style={{ background: listModify ? color : HEX }} />
    </Popover>
  )
}

export default React.memo(HctPicker)
