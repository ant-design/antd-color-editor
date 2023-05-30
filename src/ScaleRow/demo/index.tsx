import { ScaleRow } from 'kitchen-color-studio';

const scale = [
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
];

export default () => <ScaleRow colorType="hex" scale={scale} title="light" />;
