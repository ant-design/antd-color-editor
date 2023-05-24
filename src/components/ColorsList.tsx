import React from 'react'
import { SortableList } from '@ant-design/pro-editor'
import ColorsListItem, { ColorsListHeader } from './ColorsListItem'

export type ISchemaItem = {
  title: string
  valueType?: string
  color: string
  darkColor: string
  type?: 'normal' | 'neutral'
}

interface IColorsList {
  colorList: ISchemaItem[]
  setColorList: (v: ISchemaItem[]) => void
  isolateDark?: boolean | any
}

const ColorsList: React.FC<IColorsList> = ({ colorList, setColorList, isolateDark }) => {
  return (
    <div style={{ padding: '0 12px' }}>
      <SortableList
        renderHeader={() => <ColorsListHeader isolateDark={isolateDark} />}
        initialValues={colorList}
        onChange={setColorList}
        renderContent={(item, index) => <ColorsListItem item={item} index={index} isolateDark={isolateDark} />}
        creatorButtonProps={{
          creatorButtonText: '添加一个色板',
          record: (): ISchemaItem => ({
            title: '未命名色板',
            type: 'normal',
            color: '#1677FF',
            darkColor: '#1677FF',
          }),
        }}
      />
    </div>
  )
}

export default React.memo(ColorsList)
