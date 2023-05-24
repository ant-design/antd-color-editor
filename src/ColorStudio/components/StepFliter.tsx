import { memo } from 'react'
import { Select, Space } from 'antd'
import styled from 'styled-components'
import type { IGenerateConfig, ISchemaItem } from '@/index'
import { GenerateScale } from '@/index'

const { Option } = Select

/******************************************************
 *********************** Style *************************
 ******************************************************/

const View = styled.div`
  padding: 0 12px;
`

const ColorAvatar = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 3px;
`

const SelectPanel = styled(Select)`
  border-radius: 3px;
`

/******************************************************
 ************************* Dom *************************
 ******************************************************/

export interface IStepFliter {
  color?: ISchemaItem
  config?: IGenerateConfig
  defaultFliter?: number[]
  onChange?: (value: number[] | any) => void
}

const StepFliter = memo<IStepFliter>(
  ({
    config,
    color = {
      title: 'nuname',
      type: 'normal',
      color: '#1677FF',
    },
    defaultFliter,
    onChange,
  }) => {
    const generate = new GenerateScale(config)
    const colorList = generate.gen(color.color, {
      theme: 'light',
      neutral: color.type === 'neutral',
    })

    const defaultValue = defaultFliter || []
    const genOption = colorList.map((c, index) => {
      if (!defaultFliter) defaultValue.push(index)
      const label = (
        <Space>
          <ColorAvatar style={{ background: c }} />
          {index + 1}
        </Space>
      )
      return (
        <Option key={index} value={index} label={label}>
          {label}
        </Option>
      )
    })

    return (
      <View>
        <SelectPanel
          size="small"
          mode="multiple"
          style={{ width: '100%' }}
          placeholder="筛选需要的梯度"
          defaultValue={defaultValue}
          onChange={onChange}
          optionLabelProp="label"
        >
          {genOption}
        </SelectPanel>
      </View>
    )
  }
)

export default StepFliter
