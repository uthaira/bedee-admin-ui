import { Meta } from '@storybook/react'
import { Lead1, RadioButton, RadioGroup } from '../../components'
import { useState } from 'react'
import { Box, Stack } from '@mui/material'

export const SampleRadio = () => {
  const [state, setState] = useState(1)

  const items = [
    { label: 'One', value: 1 },
    { label: 'Two', value: 2 },
    { label: 'Three', value: 3 },
  ]

  const onRadioChange = (val: any) => {
    setState(val)
  }

  return (
    <Box>
      <Stack direction="row" gap={20}>
        <Box textAlign="center">
          <Lead1 text="Checked" />
          <RadioButton checked={true} />
        </Box>
        <Box textAlign="center">
          <Lead1 text="Unchecked" />
          <RadioButton checked={false} />
        </Box>
        <Box textAlign="center">
          <Lead1 text="Disabled" />
          <RadioButton disabled />
        </Box>
      </Stack>
      <RadioGroup title="RadioGroup" data={items} value={state} onChange={onRadioChange} isRow />
      <RadioGroup title="RadioGroup - Disabled" disabled data={items} value={state} onChange={onRadioChange} isRow />
      <RadioGroup title="RadioGroup - column" data={items} value={state} onChange={onRadioChange} />
    </Box>
  )
}

export default {
  title: 'Sample/Radio',
  component: SampleRadio,
} as Meta<typeof SampleRadio>
