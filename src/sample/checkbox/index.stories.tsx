import { Meta } from '@storybook/react'
import { useState } from 'react'
import { Box, Stack } from '@mui/material'
import { CheckboxButton, CheckboxGroup, Lead1 } from '../../components'

export const SampleCheckbox = () => {
  const [state, setState] = useState<any>([])
  const items = [
    { label: 'One', value: '1' },
    { label: 'Two', value: '2' },
    { label: 'Three', value: '3' },
  ]

  const itemsDisable = [
    { label: 'One', value: '1', disabled: true },
    { label: 'Two', value: '2', disabled: true },
    { label: 'Three', value: '3', disabled: true },
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
      <Stack direction="row" gap={20}>
        <Box textAlign="center">
          <Lead1 text="Checked" />
          <CheckboxButton checked={true} />
        </Box>
        <Box textAlign="center">
          <Lead1 text="Unchecked" />
          <CheckboxButton checked={false} />
        </Box>
        <Box textAlign="center">
          <Lead1 text="Disabled" />
          <CheckboxButton disabled />
        </Box>
      </Stack>
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
