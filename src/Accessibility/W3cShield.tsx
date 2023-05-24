import { memo } from 'react'
import { readable } from '@/index'
import { Tooltip } from 'antd'
import styled from 'styled-components'

/******************************************************
 *********************** Style *************************
 ******************************************************/

const Tag = styled.div`
  display: inline-block;

  margin-left: 4px;
  padding: 2px 4px;

  font-size: 10px;
  line-height: 1;

  background: ${({ theme }) => theme.colorPrimary};
  border-radius: 4px;
`

/******************************************************
 ************************* Dom *************************
 ******************************************************/

export interface IW3cShield {
  color1: string
  color2: string
}

const W3cShield = memo<IW3cShield>(({ color1, color2 }) => {
  const readableData = readable(color1, color2)
  const url = readableData.shield
  const resultText = (result: boolean) => (
    <span style={{ color: result ? '#52c41a' : 'gray' }}>{result ? 'pass' : 'fail'}</span>
  )
  const text = (
    <div>
      <div>CTS ⇢ {readableData.cts}</div>
      <div>
        AA<Tag>large</Tag> ⇢ {resultText(readableData.aaLarge)}
      </div>
      <div>
        AA<Tag>small</Tag> ⇢ {resultText(readableData.aaaSmall)}
      </div>
      <div>
        AAA<Tag>large</Tag> ⇢ {resultText(readableData.aaaLarge)}
      </div>
      <div>
        AAA<Tag>small</Tag> ⇢ {resultText(readableData.aaaSmall)}
      </div>
    </div>
  )
  return (
    <Tooltip title={text}>
      <a href="https://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef" target="_blank" rel="noreferrer">
        <img src={url} />
      </a>
    </Tooltip>
  )
})

export default W3cShield
