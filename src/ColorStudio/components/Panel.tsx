import { TriangleDownIcon, TriangleRightIcon } from '@radix-ui/react-icons';
import { Collapse } from 'antd';
import { LevaPanel as Leva } from 'leva';
import { memo } from 'react';

import { levaLightTheme } from '@/index';

const CollapsePanel = memo((props: any) => {
  return (
    <Collapse
      {...props}
      expandIcon={({ isActive }) =>
        isActive ? (
          <TriangleDownIcon style={{ opacity: 0.5 }} />
        ) : (
          <TriangleRightIcon style={{ opacity: 0.5 }} />
        )
      }
      expandIconPosition="end"
      ghost
    />
  );
});

const LevaPanel = memo(({ store }: any) => (
  <Leva fill flat store={store} theme={levaLightTheme} titleBar={false} />
));

const Panel = Collapse.Panel;
export { CollapsePanel, LevaPanel, Panel };
