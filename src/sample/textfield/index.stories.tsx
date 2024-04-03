import { Meta } from '@storybook/react'
import { TextField } from '../../components'
import { Stack } from '@mui/material'
import { useState } from 'react'

export const SampleTextField = () => {
  const [text, setText] = useState('')

  const onChangeInput = (value: any) => {
    setText(value)
  }

  return (
    <Stack gap={2}>
      <TextField value={text} bdOnChange={onChangeInput} titleLabel="Text Field" placeholder="placeholder" />
      <TextField value={text} bdOnChange={onChangeInput} titleLabel="Text Field - disabled" disabled placeholder="placeholder" />
      <TextField value={text} bdOnChange={onChangeInput} titleLabel="Text Field - error" error={text === ''} placeholder="placeholder" />
      <TextField value={text} bdOnChange={onChangeInput} titleLabel="Text Area" multiline rows={4} maxRows={4} placeholder="placeholder" />
    </Stack>
  )
}

export default {
  title: 'Sample/TextField',
  component: SampleTextField,
} as Meta<typeof SampleTextField>
