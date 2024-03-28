import { Meta, StoryObj } from '@storybook/react'
import Dropdown from './BaseDropdown'

const mockData = [
  { label: 'One', value: 1 },
  { label: 'Two', value: 2 },
  { label: 'Three', value: 3 },
]

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
} as Meta<typeof Dropdown>

type DropdownStory = StoryObj<typeof Dropdown>

export const BaseDropdown: DropdownStory = {
  args: {
    title: 'Dropdown',
    data: mockData,
    value: 1,
    disabled: false,
  },
}
