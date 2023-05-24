import type { ISchemaItem } from '@/components'
import type { IGenerateConfig } from '@/utils/generateScale'
import { defaultConfig } from '@/utils/generateScale'

export interface IPatternConfig {
  isolateDark: boolean
  isFliterStep: boolean
  displayFliterStep: boolean
}

export interface IEditConfig {
  isolateEdit: boolean
}

interface ISystemConfig {
  pattern: IPatternConfig
  edit: IEditConfig
}

const defaultSystemConfig: ISystemConfig = {
  pattern: {
    isolateDark: false,
    isFliterStep: false,
    displayFliterStep: false,
  },
  edit: {
    isolateEdit: false,
  },
}

const defaultColorList: ISchemaItem[] = [
  { title: 'Primary', color: '#1677FF', darkColor: '#1677FF', type: 'normal' },
  { title: 'Neutral', color: '#1677FF', darkColor: '#1677FF', type: 'neutral' },
  {
    title: 'Red',
    color: '#da4a45',
    darkColor: '#da4a45',
    type: 'normal',
  },
  {
    title: 'Yellow',
    color: '#e09f00',
    darkColor: '#be8600',
    type: 'normal',
  },
  {
    title: 'Green',
    color: '#67c03a',
    darkColor: '#4ca41f',
    type: 'normal',
  },
  {
    title: 'Sky',
    color: '#00bec3',
    darkColor: '#00a1a5',
    type: 'normal',
  },
  {
    title: 'Purple',
    color: '#9b59eb',
    darkColor: '#9b59eb',
    type: 'normal',
  },
]

export interface IEditorConfig {
  generate: IGenerateConfig
  system: ISystemConfig
  colorList: ISchemaItem[]
  stepFliter: number[]
}

export const defaultEditorConfig: IEditorConfig = {
  generate: defaultConfig,
  system: defaultSystemConfig,
  colorList: defaultColorList,
  stepFliter: undefined,
}
