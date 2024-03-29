import { Meta, StoryObj } from '@storybook/react'
import Tabs from './BaseTabs'

const TabsItems = [
  { label: 'Tab One', value: 1 },
  { label: 'Tab Two', value: 2 },
  { label: 'Tab Three', value: 3 },
]

export default {
  title: 'Components/Tabs',
  component: Tabs,
} as Meta<typeof Tabs>

type TabsStory = StoryObj<typeof Tabs>

export const BaseTabs: TabsStory = {
  args: {
    data: TabsItems,
    value: 1,
  },
}
