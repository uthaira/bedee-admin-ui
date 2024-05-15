import { Meta, StoryObj } from '@storybook/react'
import TextField from './BaseTextField'

export default {
  title: 'Components/TextField',
  component: TextField,
} as Meta<typeof TextField>

type TextFieldStory = StoryObj<typeof TextField>

export const BaseTextField: TextFieldStory = {
  args: {
    titleLabel: 'Title Label',
    value: '',
    placeholder: 'Placeholder',
    disabled: false,
    error: false,
    multiline: false,
    rows: 4,
    maxRows: 4,
  },
}
