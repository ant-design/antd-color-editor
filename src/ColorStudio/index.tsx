import { CollapseTitle } from '@ant-design/pro-editor';
import { useLocalStorageState } from 'ahooks';
import { Tabs } from 'antd';
import { buttonGroup, useControls, useCreateStore } from 'leva';
import { memo, useEffect, useState, type ReactNode } from 'react';

import {
  AccessPanel,
  ColorsList,
  ExportPanel,
  Footer,
  JsonView,
  LevaPanel,
  NavBar,
  PanelGroup,
  ScalePreview,
  StepFliter,
  TabKey,
  ThreeView,
  TokenView,
  type IPanel,
  type ISchemaItem,
} from '@/index';
import { CanvasView, ColorView, EditorView, PanelView } from '@/styles';

import {
  advanceConfig,
  cacheEditorConfig,
  colorConfig,
  colorTypes,
  defineGenerateConfig,
  editConfig,
  genDisplapConfig,
  genScales,
  hueConfig,
  neutralAdvanceConfig,
  neutralConfig,
  patternConfig,
  setForceConfig,
  stepConfig,
  threeConfig,
  tokenConfig,
  type IEditorConfig,
  type IScales,
} from './config';

const { TabPane } = Tabs;
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
    const [tabKey, setTabKey] = useLocalStorageState<number>('kietchen-color-tabkey', {
      defaultValue: TabKey.colors,
    });
    const [panelTabKey, setPanelTabKey] = useLocalStorageState<string>('kietchen-color-panelkey', {
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
    const lightUp: any = useControls(colorConfig.lightUp, { store: lightUpStore });
    const lightDown: any = useControls(colorConfig.lightDown, { store: lightDownStore });
    const darkUp: any = useControls(colorConfig.darkUp, { store: darkUpStore });
    const darkDown: any = useControls(colorConfig.darkDown, { store: darkDownStore });
    // 调色-L&D Advance
    const lightUpAdvance: any = useControls(advanceConfig.lightUp, { store: lightUpAdvanceStore });
    const lightDownAdvance: any = useControls(advanceConfig.lightDown, {
      store: lightDownAdvanceStore,
    });
    // 调色-Neutral
    const darkUpAdvance: any = useControls(advanceConfig.darkUp, { store: darkUpAdvanceStore });
    const darkDownAdvance: any = useControls(advanceConfig.darkDown, {
      store: darkDownAdvanceStore,
    });
    // 调色-Neutral
    const neutral = useControls(neutralConfig, { store: neutralStore });
    const neutralAdvance = useControls(neutralAdvanceConfig, { store: neutralAdvanceStore });
    // 色板
    const pattern = useControls(patternConfig, { store: patternStore });
    const step = useControls(stepConfig, { store: stepStore });
    // 视图
    const displayColorTypeSwitch: any = {};
    const [display, setDisplayConfig] = useControls(
      () => genDisplapConfig(buttonGroup(displayColorTypeSwitch)),
      {
        store: displayStore,
      },
    );
    colorTypes.forEach((ct) => {
      displayColorTypeSwitch[ct] = () => setDisplayConfig({ colorType: ct });
    });
    const three: any = useControls(threeConfig, { store: threeStore });
    const token: any = useControls(tokenConfig, { store: tokenStore });

    /******************************************************
     ************************* Configs ********************
     ******************************************************/
    const generateConfig = defineGenerateConfig({
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
    });

    const editorConfig: IEditorConfig | any = {
      generate: generateConfig,
      colorList,
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
        panel: (
          <StepFliter
            color={colorList[0]}
            config={generateConfig}
            defaultFliter={stepFliter}
            onChange={setStepFliter}
          />
        ),
        hidden: !pattern.isFliterStep,
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
        name: c.title,
        scales,
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
      };
    });

    useEffect(() => {
      // @ts-ignore
      if (onChange) onChange(colorListScale.map((c) => ({ name: c.name, scales: c.scales })));
    }, [editorConfig]);

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
            <ThreeView config={{ ...three, ...display }} data={colorListScale} />
          )}
          {tabKey === TabKey.token && <TokenView config={token} data={colorListScale} />}
          {tabKey === TabKey.config && <JsonView data={editorConfig} />}
        </CanvasView>
        <PanelView>
          <Tabs defaultActiveKey={panelTabKey} onChange={setPanelTabKey}>
            <TabPane key={PanelTabKey.edit} tab="调色">
              <PanelGroup panels={editPanelGroup} />
            </TabPane>
            <TabPane key={PanelTabKey.pattern} tab="色板">
              <PanelGroup panels={patternPanelGroup} />
            </TabPane>
            <TabPane key={PanelTabKey.access} tab="可读性">
              <AccessPanel data={colorListScale} />
            </TabPane>
            <TabPane key={PanelTabKey.display} tab="视图">
              <PanelGroup panels={displayPanelGroup} />
            </TabPane>
            <TabPane key={PanelTabKey.export} tab="存储">
              <PanelGroup panels={exportPanelGroup} />
              <ExportPanel config={editorConfig} />
            </TabPane>
          </Tabs>
        </PanelView>
      </EditorView>
    );
  },
);

export default ColorStudio;
