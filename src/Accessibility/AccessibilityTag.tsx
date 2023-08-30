import { Popover } from 'antd';
import { memo } from 'react';
import styled from 'styled-components';

import AccessBlock from './AccessBlock';
import { type IReadable, readable } from './readable';

/******************************************************
 *********************** Style *************************
 ******************************************************/

const View = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Tag = styled.div<{ tagColor: [string, string] }>`
  cursor: pointer;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  height: 24px;
  padding: 0 8px;

  font-size: 12px;
  color: ${({ tagColor }) => tagColor[1]};

  background: ${({ tagColor }) => tagColor[0]};
  border-radius: ${({ theme }) => theme.borderRadiusSM}px;
`;

/******************************************************
 ************************* Dom *************************
 ******************************************************/

type IColor = [string, string];

export interface IAccessibilityTag {
  colors: IColor[];
}

const AccessibilityTag = memo<IAccessibilityTag>(({ colors }) => {
  const colorsResult: IReadable[] = colors.map((item) => readable(...item));
  const aaCov = (colorsResult.filter((a) => a.aa).length / colorsResult.length) * 100;
  let tagColor: [string, string] = ['#46d20033', '#52b915'];
  if (aaCov <= 80) {
    tagColor = ['#8edc073b', '#9bcb09'];
  } else if (aaCov <= 64) {
    tagColor = ['#8edc073b', '#ebbb03'];
  } else if (aaCov <= 50) {
    tagColor = ['#ffbc0745', '#f99b00'];
  } else if (aaCov <= 32) {
    tagColor = ['#ff630b29', '#f14c19'];
  } else if (aaCov <= 16) {
    tagColor = ['#ed1c0a1c', '#ec011bf2'];
  }
  const content = (
    <View>
      {colors.map((item, index) => (
        <AccessBlock color1={item[0]} color2={item[1]} key={index} />
      ))}
    </View>
  );
  return (
    <Popover content={content} title="W3C Accessibility 可读性测试">
      <a
        href="https://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef"
        rel="noreferrer"
        target="_blank"
      >
        <Tag tagColor={tagColor}>AA coverage {Math.round(aaCov)}%</Tag>
      </a>
    </Popover>
  );
});

export default AccessibilityTag;
