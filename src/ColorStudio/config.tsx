import { bezier } from '@leva-ui/plugin-bezier';
import {
  AngleIcon,
  AspectRatioIcon,
  BlendingModeIcon,
  CodeIcon,
  ColorWheelIcon,
  ComponentBooleanIcon,
  EyeNoneIcon,
  HobbyKnifeIcon,
  OpacityIcon,
  PinBottomIcon,
  PinTopIcon,
  ShadowIcon,
  TokensIcon,
  TransformIcon,
  UpdateIcon,
} from '@radix-ui/react-icons';
import { folder } from 'leva';
import type { Schema } from 'leva/src/types/index';
import { merge } from 'lodash-es';

import {
  GenerateScale,
  type IGenerateConfig,
  type IGenerateConfigItem,
  type ISchemaItem,
  Label,
} from '@/index';

import { type IEditorConfig, defaultEditorConfig } from './defaultConfig';

export const getCacheEditorConfig = (): IEditorConfig => {
  const localConfig = localStorage.getItem('antd-color-config');
  const cacheConfig: IEditorConfig = localConfig
    ? merge(defaultEditorConfig, JSON.parse(localConfig).data)
    : defaultEditorConfig;
  return cacheConfig;
};

export const setForceConfig = (forceConfig: {
  data: IEditorConfig;
  name: string;
  time: number;
}) => {
  if (forceConfig?.data?.generate && forceConfig?.time && forceConfig?.name) {
    let localConfig: any = localStorage.getItem('antd-color-config');
    if (localConfig) {
      localConfig = JSON.parse(localConfig);
      if (localConfig?.name === name) return;
    }
    localStorage.setItem('antd-color-config', JSON.stringify(forceConfig));
  }
};

export const cacheEditorConfig: IEditorConfig = getCacheEditorConfig();

/******************************************************
 ************************ 调色 *************************
 ******************************************************/

const defineColorConfig = (defaultColorConfig: IGenerateConfigItem): Schema => ({
  cTarget: {
    label: <Label icon={<BlendingModeIcon />} title="色度目标" />,
    max: 120,
    min: 1,
    step: 1,
    value: defaultColorConfig.cTarget,
  },
  hRotate: {
    label: <Label icon={<ColorWheelIcon />} title="色相旋转" />,
    max: 360,
    min: -360,
    step: 1,
    value: defaultColorConfig.hRotate,
  },
  tTarget: {
    label: <Label icon={<ShadowIcon />} title="明度目标" />,
    max: 100,
    min: 1,
    step: 1,
    value: defaultColorConfig.tTarget,
  },
});

export const colorConfig = {
  darkDown: defineColorConfig(cacheEditorConfig.generate.dark.down),
  darkUp: defineColorConfig(cacheEditorConfig.generate.dark.up),
  lightDown: defineColorConfig(cacheEditorConfig.generate.light.down),
  lightUp: defineColorConfig(cacheEditorConfig.generate.light.up),
};

const defineAdvanceConfig = (defaultColorConfig: IGenerateConfigItem): Schema => ({
  ['明度曲线']: folder(
    {
      tEasing: bezier(defaultColorConfig.tEasing),
    },
    { collapsed: true, color: '#8c92a4' },
  ),
  ['色度曲线']: folder(
    {
      cEasing: bezier(defaultColorConfig.cEasing),
    },
    { collapsed: true, color: '#8c92a4' },
  ),
  ['色相曲线']: folder(
    {
      hEasing: bezier(defaultColorConfig.hEasing),
    },
    { collapsed: true, color: '#8c92a4' },
  ),
});

export const advanceConfig = {
  darkDown: defineAdvanceConfig(cacheEditorConfig.generate.dark.down),
  darkUp: defineAdvanceConfig(cacheEditorConfig.generate.dark.up),
  lightDown: defineAdvanceConfig(cacheEditorConfig.generate.light.down),
  lightUp: defineAdvanceConfig(cacheEditorConfig.generate.light.up),
};

export const hueConfig: Schema = {
  multiply: {
    label: <Label icon={<AngleIcon />} title="补偿乘阶" />,
    max: 1,
    min: -1,
    value: cacheEditorConfig.generate.hue.multiply,
  },
  segment: {
    label: <Label icon={<ColorWheelIcon />} title="补偿区间" />,
    max: 360,
    min: 0,
    step: 1,
    value: cacheEditorConfig.generate.hue.segment,
  },
};

export const neutralConfig: Schema = {
  cStart: {
    label: <Label icon={<BlendingModeIcon />} title="色度标准" />,
    max: 36,
    min: 1,
    step: 1,
    value: cacheEditorConfig.generate.neutral.cStart,
  },
  cTarget: {
    label: <Label icon={<BlendingModeIcon />} title="色度目标" />,
    max: 36,
    min: 1,
    step: 1,
    value: cacheEditorConfig.generate.neutral.cTarget,
  },
  standard: {
    label: <Label icon={<OpacityIcon />} title="明度标准" />,
    value: cacheEditorConfig.generate.neutral.standard,
  },
};

export const neutralAdvanceConfig = {
  ['上梯度 色度曲线']: folder(
    {
      cEasingUp: bezier(cacheEditorConfig.generate.neutral.cEasingUp),
    },
    { collapsed: true, color: '#8c92a4' },
  ),
  ['下梯度 色度曲线']: folder(
    {
      cEasingDown: bezier(cacheEditorConfig.generate.neutral.cEasingDown),
    },
    { collapsed: true, color: '#8c92a4' },
  ),
};

/******************************************************
 ************************ 色板 *************************
 ******************************************************/

export const patternConfig: Schema = {
  displayFliterStep: {
    label: <Label icon={<EyeNoneIcon />} title="只显示筛选后梯度" />,
    render: (get) => get('isFliterStep'),
    value: cacheEditorConfig.system.pattern.displayFliterStep,
  },
  isFliterStep: {
    label: <Label icon={<HobbyKnifeIcon />} title="开启梯度筛选" />,
    value: cacheEditorConfig.system.pattern.isFliterStep,
  },
  isolateDark: {
    label: <Label icon={<ComponentBooleanIcon />} title="亮暗主色分离" />,
    value: cacheEditorConfig.system.pattern.isolateDark,
  },
};

export const stepConfig: Schema = {
  down: {
    label: <Label icon={<PinBottomIcon />} title="向下梯度" />,
    min: 1,
    step: 1,
    value: cacheEditorConfig.generate.step.down,
  },
  up: {
    label: <Label icon={<PinTopIcon />} title="向上梯度" />,
    min: 1,
    step: 1,
    value: cacheEditorConfig.generate.step.up,
  },
};

/******************************************************
 ************************ 视图 *************************
 ******************************************************/

export const editConfig: Schema = {
  isolateEdit: {
    label: <Label icon={<ComponentBooleanIcon />} title="亮暗调节分离" />,
    value: cacheEditorConfig.system.edit.isolateEdit,
  },
};

export const colorTypes = ['mix', 'hex', 'hct', 'rgb', 'hsl', 'hsv', 'cts'];
export const displayConfig = {
  colorType: {
    label: <Label icon={<TokensIcon />} title="色彩空间" />,
    options: colorTypes,
    value: 'hct',
  },
  showDetail: {
    label: <Label icon={<AspectRatioIcon />} title="详细模式" />,
    value: true,
  },
};

export const threeConfig = {
  autoRotate: {
    label: <Label icon={<UpdateIcon />} title="自动旋转" />,
    value: true,
  },
  hueZoom: {
    label: <Label icon={<EyeNoneIcon />} title="色相缩放" />,
    max: 10,
    min: 1,
    step: 1,
    value: 3.6,
  },
  showFloor: {
    label: <Label icon={<EyeNoneIcon />} title="显示辅助线" />,
    value: true,
  },
  threeZoom: {
    label: <Label icon={<TransformIcon />} title="模型尺寸" />,
    max: 100,
    min: 1,
    step: 1,
    value: 8,
  },
};

export const tokenConfig = {
  codeType: {
    label: <Label icon={<CodeIcon />} title="变量格式" />,
    options: ['css', 'less', 'scss', 'js'],
    value: 'css',
  },
  colorType: {
    label: <Label icon={<TokensIcon />} title="色彩空间" />,
    options: ['mix', 'hex', 'rgb', 'hsl'],
    value: 'mix',
  },
  isolateDarkToken: {
    label: <Label icon={<ComponentBooleanIcon />} title="亮暗变量分离" />,
    value: true,
  },
};

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
    dark: {
      down: edit.isolateEdit ? { ...darkDown, darkDownAdvance } : { ...lightUp, ...lightUpAdvance },
      up: edit.isolateEdit
        ? { ...darkUp, ...darkUpAdvance }
        : { ...lightDown, ...lightDownAdvance },
    },
    hue,
    light: {
      down: { ...lightDown, ...lightDownAdvance },
      up: { ...lightUp, ...lightUpAdvance },
    },
    neutral: { ...neutral, ...neutralAdvance },
    step,
  };
  return JSON.parse(JSON.stringify(config));
};

export interface IScales {
  dark: string[];
  light: string[];
}

export const genScales = (
  color: ISchemaItem,
  config: IEditorConfig,
): {
  color: string;
  darkColor: string;
  scales: IScales;
} => {
  const { system, stepFliter, generate } = config;
  const { pattern } = system;
  const scaleGeneration = new GenerateScale(generate);
  let scales = {
    dark: scaleGeneration.gen(pattern.isolateDark ? color.darkColor : color.color, {
      neutral: color.type === 'neutral',
      theme: 'dark',
    }),
    light: scaleGeneration.gen(color.color, { neutral: color.type === 'neutral', theme: 'light' }),
  };
  const rawScales = scales;
  if (pattern.isFliterStep && pattern.displayFliterStep && stepFliter?.length > 0) {
    scales = {
      dark: scales.dark.filter((_, index) => stepFliter.includes(index)),
      light: scales.light.filter((_, index) => stepFliter.includes(index)),
    };
  }
  return {
    color: rawScales.light[generate.step.up],
    darkColor: rawScales.dark[generate.step.up],
    scales,
  };
};

export * from './defaultConfig';
