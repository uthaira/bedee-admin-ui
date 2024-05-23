import { Meta } from '@storybook/react'
import { Dropdown, MultipleSelect } from '../../components'
import { useState } from 'react'
import { Box } from '@mui/material'

export const SampleDropdown = () => {
  const [selected, setSelected] = useState({
    normalDropdown: '',
    disabledDropdown: '',
    multipleSelect: [mockSelectData.find((film: any) => film.id === '3'), mockSelectData.find((film: any) => film.id === '4')],
  })

  const onSelectChange = (value: any, tag: any) => {
    setSelected((prev) => ({ ...prev, [tag]: value }))
  }

  return (
    <Box>
      <Dropdown
        titleLabel="Dropdown"
        data={mockData}
        value={selected.normalDropdown}
        tag="normalDropdown"
        bdOnChange={onSelectChange}
        placeholder="Select Item"
        height="36px"
      />
      <Dropdown
        titleLabel="Dropdown - disabled"
        disabled
        tag="disabledDropdown"
        data={mockData}
        value={selected.disabledDropdown}
        bdOnChange={onSelectChange}
        placeholder="Select Item"
        height="36px"
      />
      <MultipleSelect
        titleLabel="Multiple Selector"
        placeholder="Search"
        selectedValue={selected.multipleSelect}
        list={mockSelectData}
        onChange={onSelectChange}
        tag="multipleSelect"
        noOptionsText="No result found."
      />
    </Box>
  )
}

export default {
  title: 'Sample/Dropdown',
  component: SampleDropdown,
} as Meta<typeof SampleDropdown>

const mockData = [
  { label: 'One', value: '1' },
  { label: 'Two', value: '2' },
  { label: 'Three', value: '3' },
]

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
