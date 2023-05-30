import { useSortableList } from '@ant-design/pro-editor';
import { Input, Select } from 'antd';
import { memo, type CSSProperties } from 'react';
import { Flexbox } from 'react-layout-kit';

import { HctPicker } from '@/index';

import { type ISchemaItem } from './ColorsList';

export interface IColorsListItem {
  index: number;
  isolateDark: boolean;
  item: ISchemaItem;
}

const fieldStyle: CSSProperties = {
  flex: 1,
  width: '100%',
  height: '24px',
  fontSize: '12px',
  borderRadius: '2px',
  minWidth: '48px',
};
const ColorsListItem = memo<IColorsListItem>(({ item, index, isolateDark }) => {
  const instance = useSortableList();

  return (
    <Flexbox align={'center'} gap={8} horizontal key={index} width={'100%'}>
      <div style={fieldStyle}>
        <Input
          onChange={(e) => {
            instance.updateItem({ title: e.target.value }, index);
          }}
          size={'small'}
          value={item.title}
        />
      </div>
      <div style={fieldStyle}>
        <Select
          onChange={(e) => {
            instance.updateItem({ type: e }, index);
          }}
          options={[
            {
              label: '彩色',
              value: 'normal',
            },
            {
              label: '中性色',
              value: 'neutral',
            },
          ]}
          size="small"
          style={{ width: '100%' }}
          value={item.type}
        />
      </div>
      <div style={fieldStyle}>
        <Input
          onChange={(e) => {
            instance.updateItem({ color: e.target.value }, index);
          }}
          size={'small'}
          value={item.color}
        />
      </div>

      <HctPicker
        color={item.color}
        listModify
        onChange={(e) => {
          instance.updateItem({ color: e }, index);
        }}
      />

      {isolateDark && (
        <>
          <div style={fieldStyle}>
            <Input
              onChange={(e) => {
                instance.updateItem({ darkColor: e.target.value }, index);
              }}
              size={'small'}
              value={item.darkColor}
            />
          </div>
          <HctPicker
            color={item.darkColor}
            listModify
            onChange={(e) => {
              instance.updateItem({ darkColor: e }, index);
            }}
          />
        </>
      )}
    </Flexbox>
  );
});

export default ColorsListItem;

export const ColorsListHeader = memo(({ isolateDark }: { isolateDark: boolean }) => {
  return (
    <Flexbox align={'center'} gap={8} horizontal style={{ paddingRight: 22 }}>
      <div style={fieldStyle}>名称</div>
      <div style={fieldStyle}>类型</div>
      <div style={fieldStyle}>色值</div>
      <div style={{ minWidth: 24 }} />
      {isolateDark && (
        <>
          <div style={fieldStyle}>暗色值</div>
          <div style={{ minWidth: 24 }} />
        </>
      )}
    </Flexbox>
  );
});
