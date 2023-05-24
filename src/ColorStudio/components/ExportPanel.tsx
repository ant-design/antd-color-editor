import { memo, useCallback } from 'react'
import { Button, Space, message, Popconfirm, Upload } from 'antd'
import styled from 'styled-components'
import { DownloadOutlined, SaveOutlined, UploadOutlined, DeleteOutlined, ReloadOutlined } from '@ant-design/icons'
import dayjs from 'dayjs'
import { DataPreviewer } from '@ant-design/pro-editor'
import { useLocalStorageState } from 'ahooks'
import { useControls, useCreateStore } from 'leva'
import type { IEditorConfig } from '@/ColorStudio/config'
import type { IPanel } from '@/index'
import { useDownload, LevaPanel, PanelGroup } from '@/index'

/******************************************************
 *********************** Style *************************
 ******************************************************/

const Btn = styled(Button)`
  font-size: 12px !important;
  border-radius: 4px;
`

const Flex = styled(Space)`
  display: flex;
  width: 100%;
  padding: 0 12px;
  > div {
    flex: 1;
  }
  .ant-upload.ant-upload-select {
    width: 100%;
  }
`

/******************************************************
 ************************* Dom *************************
 ******************************************************/

export interface IExportPanel {
  config: IEditorConfig
}

const ExportPanel = memo<IExportPanel>(({ config }) => {
  const [localData, setLocalData] = useLocalStorageState<{
    data: IEditorConfig
    name: string
    time: number
  }>('kitchen-color-config', {
    defaultValue: undefined,
  })

  const exportStore = useCreateStore()
  const { setContent, startDownload } = useDownload()
  const { name } = useControls(
    {
      name: {
        label: '配置名称',
        value: '未命名',
      },
    },
    { store: exportStore }
  )

  const genConfgFile = () => {
    return { data: config, name, time: new Date().getTime() }
  }

  const handleSave = () => {
    const data = genConfgFile()
    setLocalData(data)
    message.success('保存成功')
  }

  const handleDownload = () => {
    const data = genConfgFile()
    const fileName = name ? name + '.json' : 'config.json'
    setContent(JSON.stringify(data), fileName)
    startDownload()
  }

  const handleUpload = useCallback(
    (info: any) => {
      // if (info.file.status !== 'done') return;
      const reader = new FileReader()
      //@ts-ignore file 类型不明确
      reader.readAsText(info.file.originFileObj, 'UTF-8')
      //读取完文件之后的回调函数
      reader.onload = (evt) => {
        const fileString = evt.target?.result
        const fileJson = fileString as string
        const uploadConfig: {
          time: number
          name: string
          data: IEditorConfig
        } = JSON.parse(fileJson)
        if (uploadConfig?.time && uploadConfig?.data && uploadConfig?.name) {
          setLocalData(uploadConfig)
          message.success('上传并覆盖成功')
          location.reload()
        } else {
          message.error('配置文件不正确')
        }
      }
    },
    [setLocalData]
  )

  const handleClean = () => {
    setLocalData(undefined)
    location.reload()
  }

  const exportPanelGroup: IPanel[] = [
    {
      header: '配置存储',
      panel: (
        <>
          <LevaPanel store={exportStore} />
          <Flex direction="vertical">
            <Btn icon={<SaveOutlined />} type="primary" block size="small" onClick={handleSave}>
              保存配置
            </Btn>
            <Btn icon={<DownloadOutlined />} block size="small" onClick={handleDownload}>
              下载配置
            </Btn>
          </Flex>
        </>
      ),
    },
    {
      header: '读取/还原',
      panel: (
        <Flex direction="vertical">
          <Upload onChange={handleUpload} maxCount={1} listType="picture">
            <Btn icon={<UploadOutlined />} type="primary" block size="small">
              上传并读取配置文件
            </Btn>
          </Upload>
          <Popconfirm
            title="确定要恢复为保存配置？"
            onConfirm={() => location.reload()}
            okText="确认"
            cancelText="取消"
          >
            <Btn icon={<ReloadOutlined />} block size="small">
              恢复为保存配置
            </Btn>
          </Popconfirm>
          <Popconfirm title="确定要清空并恢复初始化？" onConfirm={handleClean} okText="确认" cancelText="取消">
            <Btn icon={<DeleteOutlined />} danger block size="small">
              清空历史配置并初始化
            </Btn>
          </Popconfirm>
        </Flex>
      ),
    },
    {
      header: localData
        ? ['本地配置:', localData.name, dayjs(localData?.time).format('YYYY-MM-DD HH:mm:ss')].join(' ')
        : '无本地配置',
      panel: localData && <DataPreviewer data={[localData?.data]} />,
    },
  ]
  return <PanelGroup panels={exportPanelGroup} />
})

export default ExportPanel
