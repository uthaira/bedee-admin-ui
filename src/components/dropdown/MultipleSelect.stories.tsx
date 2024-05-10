import { Meta, StoryObj } from '@storybook/react'
import MultipleSelect from './MultipleSelect'

const mockSelectData = [
  { id: '1', name: 'Spider-Man' },
  { id: '2', name: 'Captain America' },
  { id: '3', name: 'Iron Man' },
  { id: '4', name: 'The Avengers' },
  { id: '5', name: 'The Dark Knight' },
  { id: '6', name: 'Inception' },
  { id: '7', name: 'Interstellar' },
  { id: '8', name: 'Forrest Gump' },
]

export default {
  title: 'Components/Dropdown',
  component: MultipleSelect,
} as Meta<typeof MultipleSelect>

type MultipleSelectStory = StoryObj<typeof MultipleSelect>

export const MultipleSelector: MultipleSelectStory = {
  args: {
    titleLabel: 'Multiple Select',
    list: mockSelectData,
    placeholder: 'search',
  },
}
