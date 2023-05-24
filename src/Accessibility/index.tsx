import { memo } from 'react'
import styled from 'styled-components'
import { readable } from './readable'
import AccessBlock from './AccessBlock'

/******************************************************
 *********************** Style *************************
 ******************************************************/

const View = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`

/******************************************************
 ************************* Dom *************************
 ******************************************************/

interface IAccessibility {
  color1: string
  color2: string
}

const Accessibility = memo<IAccessibility>(({ color1, color2 }) => {
  return (
    <View>
      <AccessBlock color1={color1} color2={color2}>
        {[color1, 'on', color2].join(' ')}
      </AccessBlock>
      <AccessBlock color1={color2} color2={color1}>
        {[color2, 'on', color1].join(' ')}
      </AccessBlock>
      <AccessBlock color1={'#fff'} color2={color1}>
        {['White text on', color2].join(' ')}
      </AccessBlock>
      <AccessBlock color1={'#000'} color2={color1}>
        {['Black text on', color2].join(' ')}
      </AccessBlock>
    </View>
  )
})

export default Accessibility
export { readable }
