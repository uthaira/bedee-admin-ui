import { Meta, StoryObj } from '@storybook/react'
import Radio from './BaseRadio'

const RadioItems = [
  { key: 'One', value: 1 },
  { key: 'Two', value: 2 },
  { key: 'Three', value: 3 },
]

export default {
  title: 'Components/Radio',
  component: Radio,
} as Meta<typeof Radio>

type RadioStory = StoryObj<typeof Radio>

export const BaseRadio: RadioStory = {
  args: {
    title: 'Title Label',
    items: RadioItems,
    isRow: true,
    value: 1,
    disabled: false
  },
}
