import { Meta } from '@storybook/react'
import { RadioGroup } from '../../components'
import { useState } from 'react'
import { Box } from '@mui/material'

export const SampleRadio = () => {
  const [state, setState] = useState(1)

  const items = [
    { key: 'One', value: 1 },
    { key: 'Two', value: 2 },
    { key: 'Three', value: 3 },
  ]

  const onRadioChange = (val: any) => {
    setState(val)
  }

  return (
    <Box>
      <RadioGroup title='RadioGroup' items={items} value={state} onChange={onRadioChange} isRow />
      <RadioGroup title='RadioGroup - Disabled' disabled items={items} value={state} onChange={onRadioChange} isRow />
    </Box>
  )
}

export default {
  title: 'Sample/Radio',
  component: SampleRadio,
} as Meta<typeof SampleRadio>
