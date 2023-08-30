import { Highlighter } from 'dumi-theme-antd-style';
import { memo } from 'react';

import { CodeView } from '@/styles';

export interface IJsonView {
  data: any;
}

const JsonView = memo<IJsonView>(({ data }) => {
  return (
    <CodeView>
      <Highlighter background={false} language="json">
        {JSON.stringify(data, null, 4)}
      </Highlighter>
    </CodeView>
  );
});

export default JsonView;
