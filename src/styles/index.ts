import styled from 'styled-components'
import { DraggablePanel } from '@ant-design/pro-editor'

export const EditorView = styled.div`
  position: relative;

  overflow: hidden;
  display: flex;
  align-items: stretch;

  height: 100vh;
`

export const PanelView: any = styled(DraggablePanel)`
  position: relative;
  overflow: hidden;
  height: 100%;

  label > svg {
    stroke: ${({ theme }) => theme.colorBgLayout};
  }

  div[class^='leva'] {
    --leva-sizes-controlWidth: 66%;
    --leva-colors-elevation1: transparent;
    --leva-colors-elevation2: transparent;
    --leva-colors-elevation3: ${({ theme }) => theme.colorFillSecondary};
    --leva-colors-accent1: ${({ theme }) => theme.colorPrimary};
    --leva-colors-accent2: ${({ theme }) => theme.colorPrimaryHover};
    --leva-colors-accent3: ${({ theme }) => theme.colorPrimaryActive};
    --leva-colors-highlight1: ${({ theme }) => theme.colorTextTertiary};
    --leva-colors-highlight2: ${({ theme }) => theme.colorTextSecondary};
    --leva-colors-highlight3: ${({ theme }) => theme.colorText};
    --leva-colors-vivid1: ${({ theme }) => theme.colorWarning};
    --leva-shadows-level1: unset;
    --leva-shadows-level2: unset;
  }

  .ant-tabs-nav-list {
    padding: 1px 24px 2px;
  }
  .ant-tabs-tab-btn {
    font-size: 12px;
  }
  .ant-collapse-header {
    padding: 12px 14px !important;
    font-size: 10px;
    font-weight: 700;
  }
  .ant-tabs-nav {
    margin-bottom: 0;
  }

  .ant-collapse-content-box {
    padding: 0 4px 8px !important;
  }
  .ant-collapse-item:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colorBorderSecondary};
    border-radius: 0 !important;
  }
  .tech-studio-collapse-title {
    margin: 0 8px;
    font-size: 10px;
  }
  .ant-tabs {
    position: relative;
    overflow: hidden;
    height: 100%;
  }
  .ant-tabs-content-holder {
    position: relative;
    overflow-y: auto !important;
    height: 100%;
  }
`

export const CanvasView = styled.div`
  position: relative;
  overflow: hidden;
  flex: 1;
  height: 100%;
`

const ContentView = styled.div`
  position: relative;

  overflow-x: hidden;
  overflow-y: auto;

  width: 100%;
  height: 100%;
  padding: 24px;
`

export const ColorView: any = styled(ContentView)`
  padding-bottom: 48px;
  background: ${({ darkMode }: any) => (darkMode ? '#222' : '#f1f1f1')};
`

export const CodeView = styled(ContentView)`
  padding: 12px;
  background-color: rgb(43, 48, 59);
`

export const PanelTitle = styled.div`
  display: flex;
  align-items: center;
  > svg {
    margin-right: 4px;
  }
`
