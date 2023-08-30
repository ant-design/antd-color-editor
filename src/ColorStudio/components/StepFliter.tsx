import { Select, Space } from 'antd';
import { memo } from 'react';
import styled from 'styled-components';

import type { IGenerateConfig, ISchemaItem } from '@/index';
import { GenerateScale } from '@/index';

const { Option } = Select;

/******************************************************
 *********************** Style *************************
 ******************************************************/

const View = styled.div`
  padding: 0 12px;
`;

const ColorAvatar = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 3px;
`;

const SelectPanel = styled(Select)`
  border-radius: 3px;
`;

/******************************************************
 ************************* Dom *************************
 ******************************************************/

export interface IStepFliter {
  color?: ISchemaItem;
  config?: IGenerateConfig;
  defaultFliter?: number[];
  onChange?: (value: number[] | any) => void;
}

const StepFliter = memo<IStepFliter>(
  ({
    config,
    color = {
      color: '#1677FF',
      title: 'nuname',
      type: 'normal',
    },
    defaultFliter,
    onChange,
  }) => {
    const generate = new GenerateScale(config);
    const colorList = generate.gen(color.color, {
      neutral: color.type === 'neutral',
      theme: 'light',
    });

    const defaultValue = defaultFliter || [];
    const genOption = colorList.map((c, index) => {
      if (!defaultFliter) defaultValue.push(index);
      const label = (
        <Space>
          <ColorAvatar style={{ background: c }} />
          {index + 1}
        </Space>
      );
      return (
        <Option key={index} label={label} value={index}>
          {label}
        </Option>
      );
    });

    return (
      <View>
        <SelectPanel
          defaultValue={defaultValue}
          mode="multiple"
          onChange={onChange}
          optionLabelProp="label"
          placeholder="筛选需要的梯度"
          size="small"
          style={{ width: '100%' }}
        >
          {genOption}
        </SelectPanel>
      </View>
    );
  },
);

export default StepFliter;
