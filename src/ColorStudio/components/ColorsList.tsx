import { SortableItem, SortableList } from '@ant-design/pro-editor';
import { memo } from 'react';

import ColorsListItem, { ColorsListHeader } from './ColorsListItem';

export interface ISchemaItem extends SortableItem {
  color: string;
  darkColor: string;
  title: string;
  type?: 'normal' | 'neutral';
  valueType?: string;
}

export interface IColorsList {
  colorList: ISchemaItem[];
  isolateDark?: boolean | any;
  setColorList: (v: ISchemaItem[]) => void;
}

const ColorsList = memo<IColorsList>(({ colorList, setColorList, isolateDark }) => {
  return (
    <div style={{ padding: '0 12px' }}>
      <ColorsListHeader isolateDark={isolateDark} />
      <SortableList
        creatorButtonProps={{
          creatorButtonText: '添加一个色板',
          record: (): ISchemaItem => ({
            id: Math.ceil(Math.random() * 100000).toString(16),
            title: '未命名色板',
            type: 'normal',
            color: '#1677FF',
            darkColor: '#1677FF',
          }),
        }}
        initialValues={colorList}
        onChange={setColorList}
        renderContent={(item, index) => (
          <ColorsListItem index={index} isolateDark={isolateDark} item={item} />
        )}
      />
    </div>
  );
});

export default ColorsList;
