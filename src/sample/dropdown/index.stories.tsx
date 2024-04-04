import { Meta } from '@storybook/react'
import { Dropdown } from '../../components'
import { useState } from 'react'
import { Box } from '@mui/material'

export const SampleDropdown = () => {
  const mockData = [
    { label: 'One', value: '1' },
    { label: 'Two', value: '2' },
    { label: 'Three', value: '3' },
  ]

  const [selected, setSelected] = useState({
    normalDropdown: '',
    disabledDropdown: '',
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
    </Box>
  )
}

export default {
  title: 'Sample/Dropdown',
  component: SampleDropdown,
} as Meta<typeof SampleDropdown>
