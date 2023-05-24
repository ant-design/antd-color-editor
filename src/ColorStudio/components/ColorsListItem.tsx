import { memo, type CSSProperties } from 'react'
import { type ISchemaItem } from './ColorsList'
import { Input, Select } from 'antd'
import { useSortableList } from '@ant-design/pro-editor'
import { Flexbox } from 'react-layout-kit'
import { HctPicker } from '@/index'
export interface IColorsListItem {
  item: ISchemaItem
  index: number
  isolateDark: boolean
}

const fieldStyle: CSSProperties = {
  flex: 1,
  width: '100%',
  height: '24px',
  fontSize: '12px',
  borderRadius: '2px',
  minWidth: '48px',
}
const ColorsListItem = memo<IColorsListItem>(({ item, index, isolateDark }) => {
  const instance = useSortableList()

  return (
    <Flexbox horizontal align={'center'} gap={8} key={index} width={'100%'}>
      <div style={fieldStyle}>
        <Input
          size={'small'}
          value={item.title}
          onChange={(e) => {
            instance.updateItem({ title: e.target.value }, index)
          }}
        />
      </div>
      <div style={fieldStyle}>
        <Select
          size="small"
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
          value={item.type}
          style={{ width: '100%' }}
          onChange={(e) => {
            instance.updateItem({ type: e }, index)
          }}
        />
      </div>
      <div style={fieldStyle}>
        <Input
          size={'small'}
          value={item.color}
          onChange={(e) => {
            instance.updateItem({ color: e.target.value }, index)
          }}
        />
      </div>

      <HctPicker
        color={item.color}
        onChange={(e) => {
          instance.updateItem({ color: e }, index)
        }}
        listModify
      />

      {isolateDark && (
        <>
          <div style={fieldStyle}>
            <Input
              size={'small'}
              value={item.darkColor}
              onChange={(e) => {
                instance.updateItem({ darkColor: e.target.value }, index)
              }}
            />
          </div>
          <HctPicker
            color={item.darkColor}
            onChange={(e) => {
              instance.updateItem({ darkColor: e }, index)
            }}
            listModify
          />
        </>
      )}
    </Flexbox>
  )
})

export default ColorsListItem

export const ColorsListHeader = memo(({ isolateDark }: { isolateDark: boolean }) => {
  return (
    <Flexbox horizontal align={'center'} gap={8} style={{ paddingRight: 22 }}>
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
  )
})
