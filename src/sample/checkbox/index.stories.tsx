import { Meta } from '@storybook/react'
import { useState } from 'react'
import { Box } from '@mui/material'
import { CheckboxGroup } from '../../components'

export const SampleCheckbox = () => {
  const [state, setState] = useState<any>([])
  const items = [
    { key: 'One', value: '1' },
    { key: 'Two', value: '2' },
    { key: 'Three', value: '3' },
  ]

  const itemsDisable = [
    { key: 'One', value: '1', disabled: true },
    { key: 'Two', value: '2', disabled: true },
    { key: 'Three', value: '3', disabled: true },
  ]

  const handleStateChange = (setState: any, val: any) => {
    setState((prevState: any) => {
      if (prevState.includes(val)) {
        const updated = prevState.filter((item: any) => item !== val)
        return updated
      } else {
        const updated = [...prevState, val]
        return updated
      }
    })
  }

  const onCheckboxChange = (val: any) => {
    handleStateChange(setState, val)
  }

  return (
    <Box>
      <CheckboxGroup title="Checkbox" data={items} onChange={onCheckboxChange} selected={state} isRow />
      <CheckboxGroup title="Checkbox" data={items} onChange={onCheckboxChange} selected={state} />
      <CheckboxGroup title="Checkbox - Disabled" data={itemsDisable} onChange={onCheckboxChange} selected={state} />
    </Box>
  )
}

export default {
  title: 'Sample/Checkbox',
  component: SampleCheckbox,
} as Meta<typeof SampleCheckbox>
