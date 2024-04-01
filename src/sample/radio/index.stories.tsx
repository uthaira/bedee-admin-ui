import { Meta } from '@storybook/react'
import { RadioGroup } from '../../components'
import { useState } from 'react'
import { Box } from '@mui/material'

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
      <RadioGroup title='RadioGroup' data={items} value={state} onChange={onRadioChange} isRow />
      <RadioGroup title='RadioGroup - Disabled' disabled data={items} value={state} onChange={onRadioChange} isRow />
      <RadioGroup title='RadioGroup - column' disabled data={items} value={state} onChange={onRadioChange} />
    </Box>
  )
}

export default {
  title: 'Sample/Radio',
  component: SampleRadio,
} as Meta<typeof SampleRadio>
