import { Meta } from '@storybook/react'
import { Dropdown } from '../../components'
import { useState } from 'react'
import { Box } from '@mui/material'

export const SampleDropdown = () => {
  const mockData = [
    { label: 'One', value: 1 },
    { label: 'Two', value: 2 },
    { label: 'Three', value: 3 },
  ]

  const [selected, setSelected] = useState('')

  const onSelectChange = (event:any) => setSelected(event.target.value) 

  return (
    <Box>
      <Dropdown titleLabel="Dropdown" data={mockData} value={selected} onChange={onSelectChange} placeholder="Select Item" height="36px"/>
    </Box>
  )
}

export default {
  title: 'Sample/Dropdown',
  component: SampleDropdown,
} as Meta<typeof SampleDropdown>
