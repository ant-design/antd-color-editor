import { Segmented, Space, Tag } from 'antd';
import { memo } from 'react';
import styled from 'styled-components';

import PkgInfo from '../../../package.json';

/******************************************************
 *********************** Style *************************
 ******************************************************/

const NavBarView = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 46px;
  padding: 0 24px;

  background: ${({ theme }) => theme.colorBgContainer};
  border-bottom: 1px solid ${({ theme }) => theme.colorBorder};
`;

const LogoText = styled.div`
  font-size: 16px;
  font-weight: 600;
  line-height: 18px;
  color: ${({ theme }) => theme.colorText};
  white-space: nowrap;

  > span {
    background-image: linear-gradient(
      to left,
      ${({ theme }) => theme.colorPrimary},
      ${({ theme }) => theme.colorPrimaryHover}
    );
    background-clip: text;

    -webkit-text-fill-color: transparent;
  }
`;

const AddonView = styled.div`
  width: 240px;
`;

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
];

export interface INavBar {
  logo?: string;
  logoHref?: string;
  setTabKey: (v: any) => void;
  tabKey: TabKey;
  title?: string;
}

const NavBar = memo<INavBar>(
  ({
    tabKey,
    setTabKey,
    logo = 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
    title = 'Antd Color Editor',
    logoHref = 'https://github.com/canisminor1990/antd-color-editor',
  }) => {
    // @ts-ignore
    return (
      <NavBarView>
        <AddonView>
          <a href={logoHref} rel="noreferrer" target="_blank">
            <Space align="center">
              <img alt={'logo'} height={18} src={logo} />
              <LogoText>{title}</LogoText>
              {PkgInfo?.version && <Tag color="blue">v{PkgInfo.version}</Tag>}
            </Space>
          </a>
        </AddonView>
        <Segmented onChange={setTabKey} options={tabsList} value={tabKey} />
        <AddonView />
      </NavBarView>
    );
  },
);

export default NavBar;
