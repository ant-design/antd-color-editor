import type { ISchemaItem } from '@/ColorStudio/components/ColorsList';
import type { IGenerateConfig } from '@/utils/generateScale';
import { defaultConfig } from '@/utils/generateScale';

export interface IPatternConfig {
  displayFliterStep: boolean;
  isFliterStep: boolean;
  isolateDark: boolean;
}

export interface IEditConfig {
  isolateEdit: boolean;
}

interface ISystemConfig {
  edit: IEditConfig;
  pattern: IPatternConfig;
}

const defaultSystemConfig: ISystemConfig = {
  edit: {
    isolateEdit: false,
  },
  pattern: {
    displayFliterStep: false,
    isFliterStep: false,
    isolateDark: false,
  },
};

const defaultColorList: ISchemaItem[] = [
  { color: '#1677FF', darkColor: '#1677FF', id: 'Primary', title: 'Primary', type: 'normal' },
  { color: '#1677FF', darkColor: '#1677FF', id: 'Neutral', title: 'Neutral', type: 'neutral' },
  {
    color: '#da4a45',
    darkColor: '#da4a45',
    id: 'Red',
    title: 'Red',
    type: 'normal',
  },
  {
    color: '#e09f00',
    darkColor: '#be8600',
    id: 'Yellow',
    title: 'Yellow',
    type: 'normal',
  },
  {
    color: '#67c03a',
    darkColor: '#4ca41f',
    id: 'Green',
    title: 'Green',
    type: 'normal',
  },
  {
    color: '#00bec3',
    darkColor: '#00a1a5',
    id: 'Sky',
    title: 'Sky',
    type: 'normal',
  },
  {
    color: '#9b59eb',
    darkColor: '#9b59eb',
    id: 'Purple',
    title: 'Purple',
    type: 'normal',
  },
];

export interface IEditorConfig {
  colorList: ISchemaItem[];
  generate: IGenerateConfig;
  stepFliter: number[];
  system: ISystemConfig;
}

export const defaultEditorConfig: IEditorConfig = {
  colorList: defaultColorList,
  generate: defaultConfig,
  stepFliter: [],
  system: defaultSystemConfig,
};
