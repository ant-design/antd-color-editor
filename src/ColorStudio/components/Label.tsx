import { memo, type ReactNode } from 'react';

import { PanelTitle } from '@/styles';

export interface ILabel {
  icon: ReactNode;
  title: string;
}

const Label = memo<ILabel>(({ icon, title }) => (
  <PanelTitle>
    {icon}
    {title}
  </PanelTitle>
));

export default Label;
