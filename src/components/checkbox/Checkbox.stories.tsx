import { Meta, StoryObj } from '@storybook/react'
import Checkbox from './BaseCheckbox'

const CheckboxItems = [
  { key: 'One', value: "1" },
  { key: 'Two', value: "2" },
  { key: 'Three', value: "3" },
]

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
} as Meta<typeof Checkbox>

type CheckboxStory = StoryObj<typeof Checkbox>

export const BaseCheckbox: CheckboxStory = {
  args: {
    title: 'Title Label',
    data: CheckboxItems,
    isRow: true,
    selected: ["1", "2"]
  },
}
