import { ScalePreview } from 'antd-color-editor';

const scales = {
  dark: [
    '#001355',
    '#00297a',
    '#00409d',
    '#025abf',
    '#0f74de',
    '#1677FF',
    '#60a6fa',
    '#8bbbf8',
    '#b1d0f8',
    '#d5e5fa',
    '#f8f9fe',
  ],
  light: [
    '#f8f9fe',
    '#d5e5fa',
    '#b1d0f8',
    '#8bbbf8',
    '#60a6fa',
    '#1677FF',
    '#0f74de',
    '#025abf',
    '#00409d',
    '#00297a',
    '#001355',
  ],
};

export default () => <ScalePreview scales={scales} />;
