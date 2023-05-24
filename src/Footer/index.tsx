import React from 'react'
import styled from 'styled-components'

const FooterView = styled.div`
  padding: 24px;
  color: #999;
  text-align: center;
`

const Footer = () => (
  <FooterView>
    Copyright © 蚂蚁集团-数字科技线-平台技术部-体验设计部 |{' '}
    <a href="https://code.alipay.com/kitchen-site/kitchen-tools">Powered by @倏昱</a>
  </FooterView>
)

export default Footer
