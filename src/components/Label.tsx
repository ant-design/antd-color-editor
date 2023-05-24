import React from 'react'
import { PanelTitle } from '@/styles'

export interface ILabel {
  icon: React.ReactNode
  title: string
}

const Label: React.FC<ILabel> = ({ icon, title }) => (
  <PanelTitle>
    {icon}
    {title}
  </PanelTitle>
)

export default Label
