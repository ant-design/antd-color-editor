import { AccessibilityTag } from 'kitchen-color-studio'

export default () => {
  const colors: [string, string][] = [
    ['#1677ff', '#001355'],
    ['#001355', '#1677ff'],
    ['#fff', '#1677ff'],
    ['#000', '#1677ff'],
    ['#fff', '#001355'],
    ['#000', '#001355'],
  ]

  return <AccessibilityTag colors={colors} />
}
