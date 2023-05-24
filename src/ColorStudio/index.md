---
nav: Components
group: Color Editor
title: ColorStudio 色板编辑器
---

# ColorStudio 色板编辑器

Kitchen ColorStudio - 高自由度色板定制，基于 HCT 算法提供稳定感知明度控制，同时支持色彩空间 3D 建模

```jsx | inline
import react from 'react'
import { Button } from 'antd'
import { FullscreenOutlined } from '@ant-design/icons'
import { ProEditor } from '@ant-design/pro-editor'

export default () => (
  <Button
    type="primary"
    href={`${window.publicPath}_demos/colorstudio-demo`}
    target="_blank"
    icon={<FullscreenOutlined />}
    style={{ marginBottom: 8 }}
    shape="round"
  >
    一键全屏展示
  </Button>
)
```

## Example

<code src="./demo/index.tsx"></code>

<API></API>
