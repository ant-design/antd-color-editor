import React, { memo } from 'react'
import { W3cShield } from '@/index'
import styled from 'styled-components'
import { tinycolor } from '@ctrl/tinycolor'

/******************************************************
 *********************** Style *************************
 ******************************************************/

const Block = styled.div<IAccessBlock>`
  overflow: hidden;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-start;

  width: 100%;
  min-width: 236px;
  padding: 6px 12px 6px 6px;

  font-family: var(--leva-fonts-mono);
  font-size: 12px;
  color: ${({ color1 }) => color1};

  background: ${({ color2 }) => color2};
  border: 1px solid ${({ theme }) => theme.colorBorderSecondary};
  border-radius: 4px;
  & + & {
    margin-top: 4px;
  }
`

const ShieldBlock = styled.div`
  display: flex;
  align-items: center;
  width: 80px;
`

/******************************************************
 ************************* Dom *************************
 ******************************************************/

export interface IAccessBlock {
  color1: string
  color2: string
  children?: React.ReactNode | string
}

const AccessBlock = memo<IAccessBlock>(({ color1, color2, children }) => {
  return (
    <Block color1={color1} color2={color2}>
      <ShieldBlock>
        <W3cShield color1={color1} color2={color2} />
      </ShieldBlock>
      <div>
        {children ? children : `${tinycolor(color1).toHexString(false)} on ${tinycolor(color2).toHexString(false)}`}
      </div>
    </Block>
  )
})

export default AccessBlock
