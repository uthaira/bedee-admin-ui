import { Meta } from '@storybook/react'
import { TextField } from '../../components'
import { Stack } from '@mui/material'
import { useState } from 'react'

export const SampleTextField = () => {
  const [state, setState] = useState({
    normalField: '',
    disableField: '',
    errorField: '',
    textAreaField: '',
  })

  const onChangeInput = (value: any, tag: any) => {
    setState((prev) => ({ ...prev, [tag]: value }))
  }

  return (
    <Stack gap={2}>
      <TextField value={state.normalField} tag='normalField' bdOnChange={onChangeInput} titleLabel="Text Field" placeholder="placeholder" />
      <TextField
        value={state.disableField}
        tag='disableField'
        bdOnChange={onChangeInput}
        titleLabel="Text Field - disabled"
        disabled
        placeholder="placeholder"
      />
      <TextField
        value={state.errorField}
        tag='errorField'
        bdOnChange={onChangeInput}
        titleLabel="Text Field - error"
        error={state.errorField === ''}
        placeholder="placeholder"
      />
      <TextField
        value={state.textAreaField}
        tag='textAreaField'
        bdOnChange={onChangeInput}
        titleLabel="Text Area"
        multiline
        rows={4}
        limit={100}
        placeholder="placeholder"
      />
    </Stack>
  )
}

export default {
  title: 'Sample/TextField',
  component: SampleTextField,
} as Meta<typeof SampleTextField>
