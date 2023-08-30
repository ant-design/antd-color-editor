import { memo } from 'react';
import styled from 'styled-components';

const FooterView = styled.div`
  padding: 24px;
  color: ${({ theme }) => theme.colorTextSecondary};
  text-align: center;
`;

const Footer = memo(() => (
  <FooterView>Made with ❤ by Ant Group and Ant Design Community</FooterView>
));

export default Footer;
