import { Popover } from 'antd';
import { LevaPanel, useControls, useCreateStore } from 'leva';
import { memo, useEffect, useState } from 'react';
import styled from 'styled-components';

import { hctToHex, hexToHct, levaLightTheme } from '@/index';

/******************************************************
 *********************** Style *************************
 ******************************************************/

const ControlView = styled.div`
  width: 240px;
`;

const ColorAvatar = styled.div`
  cursor: pointer;

  width: 24px;
  min-width: 24px;
  height: 24px;

  border-radius: 3px;
`;

/******************************************************
 ************************* Dom *************************
 ******************************************************/

export interface IHctPicker {
  color?: string;
  listModify?: boolean;
  onChange: (value?: any) => void;
}

const HctPicker = memo<IHctPicker>(({ color = '#1677FF', onChange, listModify }) => {
  const [visible, setVisible] = useState(false);
  const colorStore = useCreateStore();
  // @ts-ignore
  const [{ HEX }, set] = useControls(
    // @ts-ignore
    () => ({
      HCT: {
        max: 360,
        min: 0,
        onChange: (v) => set({ HEX: hctToHex(v) }),
        step: 1,
        transient: false,
        value: hexToHct(color),
      },
      HEX: {
        onChange: (v) => set({ HCT: hexToHct(v) }),
        transient: false,
        value: color,
      },
    }),
    { store: colorStore },
  );

  useEffect(() => {
    onChange(HEX);
  }, [HEX]);

  return (
    <Popover
      content={
        <ControlView>
          <LevaPanel fill flat store={colorStore} theme={levaLightTheme} titleBar={false} />
        </ControlView>
      }
      onOpenChange={setVisible}
      open={visible}
      trigger="click"
    >
      <ColorAvatar
        onClick={() => listModify && set({ HEX: color })}
        style={{ background: listModify ? color : HEX }}
      />
    </Popover>
  );
});

export default HctPicker;
