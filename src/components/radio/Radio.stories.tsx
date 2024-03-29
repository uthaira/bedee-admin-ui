import { Meta, StoryObj } from '@storybook/react'
import Radio from './BaseRadio'

const RadioItems = [
  { label: 'One', value: 1 },
  { label: 'Two', value: 2 },
  { label: 'Three', value: 3 },
]

export default {
  title: 'Components/Radio',
  component: Radio,
} as Meta<typeof Radio>

type RadioStory = StoryObj<typeof Radio>

export const BaseRadio: RadioStory = {
  args: {
    title: 'Title Label',
    data: RadioItems,
    isRow: true,
    value: 1,
    disabled: false
  },
}
