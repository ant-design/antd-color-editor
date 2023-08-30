import { CollapseTitle } from '@ant-design/pro-editor';
import { useLocalStorageState } from 'ahooks';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import { useControls, useCreateStore } from 'leva';
import { type ReactNode, memo, useEffect, useMemo, useState } from 'react';

import {
  AccessPanel,
  ColorsList,
  ExportPanel,
  Footer,
  type IPanel,
  type ISchemaItem,
  IThreeView,
  ITokenView,
  JsonView,
  LevaPanel,
  NavBar,
  PanelGroup,
  ScalePreview,
  StepFliter,
  TabKey,
  ThreeView,
  TokenView,
} from '@/index';
import { CanvasView, ColorView, EditorView, PanelView } from '@/styles';

import {
  type IEditorConfig,
  type IScales,
  advanceConfig,
  cacheEditorConfig,
  colorConfig,
  defineGenerateConfig,
  displayConfig,
  editConfig,
  genScales,
  hueConfig,
  neutralAdvanceConfig,
  neutralConfig,
  patternConfig,
  setForceConfig,
  stepConfig,
  threeConfig,
  tokenConfig,
} from './config';

const Collapse: any = CollapseTitle;

enum PanelTabKey {
  access = 'access',
  display = 'display',
  edit = 'edit',
  export = 'export',
  pattern = 'pattern',
}

export interface IColorListScale {
  color: string;
  darkColor: string;
  dom: ReactNode;
  name: string;
  scales: IScales;
}

export interface IColorStudio {
  forceConfig?: {
    data: IEditorConfig;
    name: string;
    time: number;
  };
  logo?: string;
  logoHref?: string;
  onChange?: (v: { name: string; scales: IScales }) => void;
  showFooter?: boolean;
  title?: string;
}

const ColorStudio = memo<IColorStudio>(
  ({ logo, logoHref, title, showFooter = true, forceConfig, onChange }) => {
    const [tabKey, setTabKey] = useLocalStorageState<number>('antd-color-tabkey', {
      defaultValue: TabKey.colors,
    });
    const [panelTabKey, setPanelTabKey] = useLocalStorageState<string>('antd-color-panelkey', {
      defaultValue: PanelTabKey.edit,
    });
    const [colorList, setColorList] = useState<ISchemaItem[]>(cacheEditorConfig.colorList);
    const [stepFliter, setStepFliter] = useState<number[]>(cacheEditorConfig.stepFliter);

    useEffect(() => {
      if (forceConfig) setForceConfig(forceConfig);
    }, []);

    /******************************************************
     ************************* Store **********************
     ******************************************************/
    // 调色
    const editStore = useCreateStore();
    const hueStore = useCreateStore();
    // 调色-L&D
    const lightUpStore = useCreateStore();
    const lightDownStore = useCreateStore();
    const darkUpStore = useCreateStore();
    const darkDownStore = useCreateStore();
    // 调色-L&D Advance
    const lightUpAdvanceStore = useCreateStore();
    const lightDownAdvanceStore = useCreateStore();
    const darkUpAdvanceStore = useCreateStore();
    const darkDownAdvanceStore = useCreateStore();
    // 调色-Neutral
    const neutralStore = useCreateStore();
    const neutralAdvanceStore = useCreateStore();
    // 色板
    const patternStore = useCreateStore();
    const stepStore = useCreateStore();
    // 视图
    const displayStore = useCreateStore();
    const threeStore = useCreateStore();
    const tokenStore = useCreateStore();

    /******************************************************
     ************************* Controls *******************
     ******************************************************/
    // 调色
    const edit = useControls(editConfig, { store: editStore });
    const hue = useControls(hueConfig, { store: hueStore });

    // 调色-L&D
    const lightUp = useControls(colorConfig.lightUp, { store: lightUpStore });
    const lightDown = useControls(colorConfig.lightDown, { store: lightDownStore });
    const darkUp = useControls(colorConfig.darkUp, { store: darkUpStore });
    const darkDown = useControls(colorConfig.darkDown, { store: darkDownStore });
    // 调色-L&D Advance
    const lightUpAdvance = useControls(advanceConfig.lightUp, { store: lightUpAdvanceStore });
    const lightDownAdvance = useControls(advanceConfig.lightDown, {
      store: lightDownAdvanceStore,
    });
    // 调色-Neutral
    const darkUpAdvance = useControls(advanceConfig.darkUp, { store: darkUpAdvanceStore });
    const darkDownAdvance = useControls(advanceConfig.darkDown, {
      store: darkDownAdvanceStore,
    });
    // 调色-Neutral
    const neutral = useControls(neutralConfig, { store: neutralStore });
    const neutralAdvance = useControls(neutralAdvanceConfig, { store: neutralAdvanceStore });
    // 色板
    const pattern = useControls(patternConfig, { store: patternStore });
    const step = useControls(stepConfig, { store: stepStore });
    // 视图
    const display = useControls(displayConfig, { store: displayStore });
    const three = useControls(threeConfig, { store: threeStore });
    const token = useControls(tokenConfig, { store: tokenStore });

    /******************************************************
     ************************* Configs ********************
     ******************************************************/
    const generateConfig = defineGenerateConfig({
      darkDown,
      darkDownAdvance,
      darkUp,
      darkUpAdvance,
      edit,
      hue,
      lightDown,
      lightDownAdvance,
      lightUp,
      lightUpAdvance,
      neutral,
      neutralAdvance,
      step,
    });

    const editorConfig: IEditorConfig | any = {
      colorList,
      generate: generateConfig,
      stepFliter,
      system: {
        edit,
        pattern,
      },
    };

    /******************************************************
     ********************** PanelGroup ********************
     ******************************************************/
    const editPanelGroup: IPanel[] = [
      {
        header: '调色配置',
        panel: <LevaPanel store={editStore} />,
      },
      {
        header: edit.isolateEdit ? 'LIGHT 上梯度' : '上梯度',
        panel: (
          <>
            <LevaPanel store={lightUpStore} />
            <Collapse title="高级配置">
              <LevaPanel store={lightUpAdvanceStore} />
            </Collapse>
          </>
        ),
      },
      {
        header: edit.isolateEdit ? 'LIGHT 下梯度' : '下梯度',
        panel: (
          <>
            <LevaPanel store={lightDownStore} />
            <Collapse title="高级配置">
              <LevaPanel store={lightDownAdvanceStore} />
            </Collapse>
          </>
        ),
      },
      {
        header: 'DARK 上梯度',
        hidden: !edit.isolateEdit,
        panel: (
          <>
            <LevaPanel store={darkUpStore} />
            <Collapse title="高级配置">
              <LevaPanel store={darkUpAdvanceStore} />
            </Collapse>
          </>
        ),
      },
      {
        header: 'DARK 下梯度',
        hidden: !edit.isolateEdit,
        panel: (
          <>
            <LevaPanel store={darkDownStore} />
            <Collapse title="高级配置">
              <LevaPanel store={darkDownAdvanceStore} />
            </Collapse>
          </>
        ),
      },
      {
        header: '色相旋转补偿',
        panel: <LevaPanel store={hueStore} />,
      },
      {
        header: 'Neutal 中性色',
        panel: (
          <>
            <LevaPanel store={neutralStore} />
            <Collapse title="高级配置">
              <LevaPanel store={neutralAdvanceStore} />
            </Collapse>
          </>
        ),
      },
    ];

    const patternPanelGroup: IPanel[] = [
      {
        header: '色板配置',
        panel: <LevaPanel store={patternStore} />,
      },
      {
        header: '梯度阶梯',
        panel: <LevaPanel store={stepStore} />,
      },
      {
        header: '梯度筛选',
        hidden: !pattern.isFliterStep,
        panel: (
          <StepFliter
            color={colorList[0]}
            config={generateConfig}
            defaultFliter={stepFliter}
            onChange={setStepFliter}
          />
        ),
      },
      {
        header: '色板列表',
        panel: (
          <ColorsList
            colorList={colorList}
            isolateDark={pattern.isolateDark}
            setColorList={setColorList}
          />
        ),
      },
    ];

    const displayPanelGroup: IPanel[] = [
      {
        header: '展示配置',
        panel: (
          <>
            <LevaPanel store={displayStore} />
            <Collapse defaultExpand title="模型视图">
              <LevaPanel store={threeStore} />
            </Collapse>
          </>
        ),
      },
    ];

    const exportPanelGroup: IPanel[] = [
      {
        header: '变量配置',
        panel: <LevaPanel store={tokenStore} />,
      },
    ];

    const colorListScale: IColorListScale[] = colorList.map((c) => {
      const { scales, color, darkColor } = genScales(c, editorConfig);
      return {
        color,
        darkColor,
        dom: (
          <ScalePreview
            color={{ ...c, color, darkColor }}
            config={editorConfig}
            displayConfig={display}
            scales={scales}
          />
        ),
        name: c.title,
        scales,
      };
    });

    useEffect(() => {
      // @ts-ignore
      if (onChange) onChange(colorListScale.map((c) => ({ name: c.name, scales: c.scales })));
    }, [editorConfig]);

    const items: TabsProps['items'] = useMemo(
      () => [
        {
          children: <PanelGroup panels={editPanelGroup} />,
          key: PanelTabKey.edit,
          label: '调色',
        },
        {
          children: <PanelGroup panels={patternPanelGroup} />,
          key: PanelTabKey.pattern,
          label: '色板',
        },
        {
          children: <AccessPanel data={colorListScale} />,
          key: PanelTabKey.access,
          label: '可读性',
        },
        {
          children: <PanelGroup panels={displayPanelGroup} />,
          key: PanelTabKey.display,
          label: '视图',
        },
        {
          children: (
            <>
              <PanelGroup panels={exportPanelGroup} />
              <ExportPanel config={editorConfig} />
            </>
          ),
          key: PanelTabKey.export,
          label: '存储',
        },
      ],
      [editPanelGroup, patternPanelGroup, colorListScale, displayPanelGroup, exportPanelGroup],
    );

    return (
      <EditorView>
        <CanvasView>
          <NavBar
            logo={logo}
            logoHref={logoHref}
            setTabKey={setTabKey}
            tabKey={tabKey || TabKey.colors}
            title={title}
          />
          {tabKey === TabKey.colors && (
            <ColorView>
              {colorListScale.map((color) => color.dom)}
              {showFooter && <Footer />}
            </ColorView>
          )}
          {tabKey === TabKey.three && (
            <ThreeView
              config={{ ...three, ...display } as IThreeView['config']}
              data={colorListScale}
            />
          )}
          {tabKey === TabKey.token && (
            <TokenView config={token as ITokenView['config']} data={colorListScale} />
          )}
          {tabKey === TabKey.config && <JsonView data={editorConfig} />}
        </CanvasView>
        <PanelView>
          <Tabs defaultActiveKey={panelTabKey} items={items} onChange={setPanelTabKey} />
        </PanelView>
      </EditorView>
    );
  },
);

export default ColorStudio;
