import {
  BlendingModeIcon,
  ColorWheelIcon,
  PinBottomIcon,
  PinTopIcon,
  ShadowIcon,
  AngleIcon,
  AspectRatioIcon,
  ComponentBooleanIcon,
  TokensIcon,
  OpacityIcon,
  HobbyKnifeIcon,
  EyeNoneIcon,
  CodeIcon,
  TransformIcon,
  UpdateIcon,
} from '@radix-ui/react-icons'
import { folder } from 'leva'
import { bezier } from '@leva-ui/plugin-bezier'
import type { Schema } from 'leva/src/types/index'
import { merge } from 'lodash-es'
import { GenerateScale, Label, type IGenerateConfig, type IGenerateConfigItem, type ISchemaItem } from '@/index'

import { defaultEditorConfig, type IEditorConfig } from './defaultConfig'

export const getCacheEditorConfig = (): IEditorConfig => {
  const localConfig = localStorage.getItem('kitchen-color-config')
  const cacheConfig: IEditorConfig = localConfig
    ? merge(defaultEditorConfig, JSON.parse(localConfig).data)
    : defaultEditorConfig
  return cacheConfig
}

export const setForceConfig = (forceConfig: { data: IEditorConfig; name: string; time: number }) => {
  if (forceConfig?.data?.generate && forceConfig?.time && forceConfig?.name) {
    let localConfig: any = localStorage.getItem('kitchen-color-config')
    if (localConfig) {
      localConfig = JSON.parse(localConfig)
      if (localConfig?.name === name) return
    }
    localStorage.setItem('kitchen-color-config', JSON.stringify(forceConfig))
  }
}

export const cacheEditorConfig: IEditorConfig = getCacheEditorConfig()

/******************************************************
 ************************ 调色 *************************
 ******************************************************/

const defineColorConfig = (defaultColorConfig: IGenerateConfigItem): Schema => ({
  hRotate: {
    value: defaultColorConfig.hRotate,
    label: <Label icon={<ColorWheelIcon />} title="色相旋转" />,
    min: -360,
    max: 360,
    step: 1,
  },
  cTarget: {
    value: defaultColorConfig.cTarget,
    label: <Label icon={<BlendingModeIcon />} title="色度目标" />,
    min: 1,
    max: 120,
    step: 1,
  },
  tTarget: {
    value: defaultColorConfig.tTarget,
    min: 1,
    max: 100,
    label: <Label icon={<ShadowIcon />} title="明度目标" />,
    step: 1,
  },
})

export const colorConfig = {
  lightUp: defineColorConfig(cacheEditorConfig.generate.light.up),
  lightDown: defineColorConfig(cacheEditorConfig.generate.light.down),
  darkUp: defineColorConfig(cacheEditorConfig.generate.dark.up),
  darkDown: defineColorConfig(cacheEditorConfig.generate.dark.down),
}

const defineAdvanceConfig = (defaultColorConfig: IGenerateConfigItem): Schema => ({
  ['色相曲线']: folder(
    {
      hEasing: bezier(defaultColorConfig.hEasing),
    },
    { collapsed: true, color: '#8c92a4' }
  ),
  ['色度曲线']: folder(
    {
      cEasing: bezier(defaultColorConfig.cEasing),
    },
    { collapsed: true, color: '#8c92a4' }
  ),
  ['明度曲线']: folder(
    {
      tEasing: bezier(defaultColorConfig.tEasing),
    },
    { collapsed: true, color: '#8c92a4' }
  ),
})

export const advanceConfig = {
  lightUp: defineAdvanceConfig(cacheEditorConfig.generate.light.up),
  lightDown: defineAdvanceConfig(cacheEditorConfig.generate.light.down),
  darkUp: defineAdvanceConfig(cacheEditorConfig.generate.dark.up),
  darkDown: defineAdvanceConfig(cacheEditorConfig.generate.dark.down),
}

export const hueConfig: Schema = {
  segment: {
    label: <Label icon={<ColorWheelIcon />} title="补偿区间" />,
    value: cacheEditorConfig.generate.hue.segment,
    max: 360,
    min: 0,
    step: 1,
  },
  multiply: {
    label: <Label icon={<AngleIcon />} title="补偿乘阶" />,
    value: cacheEditorConfig.generate.hue.multiply,
    max: 1,
    min: -1,
  },
}

export const neutralConfig: Schema = {
  cStart: {
    value: cacheEditorConfig.generate.neutral.cStart,
    label: <Label icon={<BlendingModeIcon />} title="色度标准" />,
    min: 1,
    max: 36,
    step: 1,
  },
  cTarget: {
    value: cacheEditorConfig.generate.neutral.cTarget,
    label: <Label icon={<BlendingModeIcon />} title="色度目标" />,
    min: 1,
    max: 36,
    step: 1,
  },
  standard: {
    label: <Label icon={<OpacityIcon />} title="明度标准" />,
    value: cacheEditorConfig.generate.neutral.standard,
  },
}

export const neutralAdvanceConfig = {
  ['上梯度 色度曲线']: folder(
    {
      cEasingUp: bezier(cacheEditorConfig.generate.neutral.cEasingUp),
    },
    { collapsed: true, color: '#8c92a4' }
  ),
  ['下梯度 色度曲线']: folder(
    {
      cEasingDown: bezier(cacheEditorConfig.generate.neutral.cEasingDown),
    },
    { collapsed: true, color: '#8c92a4' }
  ),
}

/******************************************************
 ************************ 色板 *************************
 ******************************************************/

export const patternConfig: Schema = {
  isolateDark: {
    label: <Label icon={<ComponentBooleanIcon />} title="亮暗主色分离" />,
    value: cacheEditorConfig.system.pattern.isolateDark,
  },
  isFliterStep: {
    label: <Label icon={<HobbyKnifeIcon />} title="开启梯度筛选" />,
    value: cacheEditorConfig.system.pattern.isFliterStep,
  },
  displayFliterStep: {
    label: <Label icon={<EyeNoneIcon />} title="只显示筛选后梯度" />,
    value: cacheEditorConfig.system.pattern.displayFliterStep,
    render: (get) => get('isFliterStep'),
  },
}

export const stepConfig: Schema = {
  up: {
    label: <Label icon={<PinTopIcon />} title="向上梯度" />,
    value: cacheEditorConfig.generate.step.up,
    step: 1,
    min: 1,
  },
  down: {
    label: <Label icon={<PinBottomIcon />} title="向下梯度" />,
    value: cacheEditorConfig.generate.step.down,
    step: 1,
    min: 1,
  },
}

/******************************************************
 ************************ 视图 *************************
 ******************************************************/

export const editConfig: Schema = {
  isolateEdit: {
    label: <Label icon={<ComponentBooleanIcon />} title="亮暗调节分离" />,
    value: cacheEditorConfig.system.edit.isolateEdit,
  },
}

export const colorTypes = ['mix', 'hex', 'hct', 'rgb', 'hsl', 'hsv', 'cts']
export const genDisplapConfig = (button: any): Schema => ({
  colorType: {
    label: <Label icon={<TokensIcon />} title="色彩空间" />,
    value: 'hct',
    options: colorTypes,
  },
  ' ': button,
  showDetail: {
    label: <Label icon={<AspectRatioIcon />} title="详细模式" />,
    value: true,
  },
})

export const threeConfig = {
  threeZoom: {
    label: <Label icon={<TransformIcon />} title="模型尺寸" />,
    value: 8,
    min: 1,
    max: 100,
    step: 1,
  },
  hueZoom: {
    label: <Label icon={<EyeNoneIcon />} title="色相缩放" />,
    value: 3.6,
    min: 1,
    max: 10,
    step: 1,
  },
  autoRotate: {
    label: <Label icon={<UpdateIcon />} title="自动旋转" />,
    value: true,
  },
  showFloor: {
    label: <Label icon={<EyeNoneIcon />} title="显示辅助线" />,
    value: true,
  },
}

export const tokenConfig = {
  isolateDarkToken: {
    label: <Label icon={<ComponentBooleanIcon />} title="亮暗变量分离" />,
    value: true,
  },
  colorType: {
    label: <Label icon={<TokensIcon />} title="色彩空间" />,
    value: 'mix',
    options: ['mix', 'hex', 'rgb', 'hsl'],
  },
  codeType: {
    label: <Label icon={<CodeIcon />} title="变量格式" />,
    value: 'css',
    options: ['css', 'less', 'scss', 'js'],
  },
}

/******************************************************
 ******************* Define Config ********************
 ******************************************************/

export const defineGenerateConfig = ({
  edit,
  step,
  hue,
  neutral,
  neutralAdvance,
  lightUp,
  lightUpAdvance,
  lightDown,
  lightDownAdvance,
  darkUp,
  darkUpAdvance,
  darkDown,
  darkDownAdvance,
}: any): IGenerateConfig => {
  const config: IGenerateConfig = {
    step,
    hue,
    neutral: { ...neutral, ...neutralAdvance },
    light: {
      up: { ...lightUp, ...lightUpAdvance },
      down: { ...lightDown, ...lightDownAdvance },
    },
    dark: {
      up: edit.isolateEdit ? { ...darkUp, ...darkUpAdvance } : { ...lightDown, ...lightDownAdvance },
      down: edit.isolateEdit ? { ...darkDown, darkDownAdvance } : { ...lightUp, ...lightUpAdvance },
    },
  }
  return JSON.parse(JSON.stringify(config))
}

export interface IScales {
  light: string[]
  dark: string[]
}

export const genScales = (
  color: ISchemaItem,
  config: IEditorConfig
): {
  scales: IScales
  color: string
  darkColor: string
} => {
  const { system, stepFliter, generate } = config
  const { pattern } = system
  const scaleGeneration = new GenerateScale(generate)
  let scales = {
    light: scaleGeneration.gen(color.color, { theme: 'light', neutral: color.type === 'neutral' }),
    dark: scaleGeneration.gen(pattern.isolateDark ? color.darkColor : color.color, {
      theme: 'dark',
      neutral: color.type === 'neutral',
    }),
  }
  const rawScales = scales
  if (pattern.isFliterStep && pattern.displayFliterStep && stepFliter?.length > 0) {
    scales = {
      light: scales.light.filter((_, index) => stepFliter.includes(index)),
      dark: scales.dark.filter((_, index) => stepFliter.includes(index)),
    }
  }
  return {
    scales,
    color: rawScales.light[generate.step.up],
    darkColor: rawScales.dark[generate.step.up],
  }
}

export * from './defaultConfig'
