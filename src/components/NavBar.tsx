import React from 'react'
import styled from 'styled-components'
import { Segmented } from 'antd'
import { Space } from 'antd'
import PkgInfo from '../../package.json'

const NavBarView = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 46px;
  padding: 0 24px;

  background: #fff;
  border-bottom: 1px solid #f0f0f0;
`

const LogoText = styled.div`
  font-size: 16px;
  font-weight: 600;
  line-height: 18px;
  color: #000;
  > span {
    background-image: -webkit-linear-gradient(left, #0435a0, #1677ff);
    -webkit-background-clip: text;

    -webkit-text-fill-color: transparent;
  }
`

const Tag = styled.div`
  padding: 0 8px;

  font-size: 10px;
  color: #000e5e;

  background: #f9f9fe;
  border-radius: 10px;
`

const AddonView = styled.div`
  width: 240px;
`

export enum TabKey {
  colors,
  config,
  token,
  three,
}

const tabsList = [
  { label: '色板', value: TabKey.colors },
  { label: '模型', value: TabKey.three },
  { label: '变量', value: TabKey.token },
  { label: '配置', value: TabKey.config },
]

interface INavBar {
  tabKey: TabKey
  setTabKey: (v: TabKey) => void
  logo?: string
  title?: string
  logoHref?: string
}

const NavBar: React.FC<INavBar> = ({
  tabKey,
  setTabKey,
  logo = 'https://gw.alipayobjects.com/zos/bmw-prod/af1ea898-bf02-45d1-9f30-8ca851c70a5b.svg',
  title = 'Kitchen',
  logoHref = 'https://hitu.alipay.com/packages/kitchen-color-studio/components/ColorStudio',
}) => {
  return (
    <NavBarView>
      <AddonView>
        <a href={logoHref} target="_blank" rel="noreferrer">
          <Space align="center">
            <img height={18} src={logo} />
            <LogoText>
              {title} <span>ColorStudio</span>
            </LogoText>
            {PkgInfo?.version && !PkgInfo.version.includes('0.0.0') && <Tag>v{PkgInfo.version}</Tag>}
          </Space>
        </a>
      </AddonView>
      <Segmented value={tabKey} onChange={setTabKey} options={tabsList} />
      <AddonView />
    </NavBarView>
  )
}

export default React.memo(NavBar)
