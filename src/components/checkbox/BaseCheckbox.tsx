import { Box, FormControlLabel, FormGroup, Typography, styled } from '@mui/material'
import * as Colors from '../../colors'
import { ChangeEvent } from 'react'
import CheckboxButton from './CheckboxButton'

interface CheckBoxGroupData {
  label?: string
  value: string
  disabled?: boolean
  selected?: any
}

interface CheckBoxGroupProps {
  data: CheckBoxGroupData[]
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  selected: string[]
  title?: string
  isRow?: boolean
}

const BaseCheckbox = (props: CheckBoxGroupProps) => {
  const { data, onChange, selected, title, isRow } = props

  const onChangeValue = (event: any) => onChange(event.target.value)

  const titleLabel = title ? (
    <Typography color={Colors.gray6} fontSize={15} fontWeight={600}>
      {title}
    </Typography>
  ) : undefined

  const content = data.map(({ label, value, disabled }, index) => (
    <StyledFormControlLabel
      key={index}
      control={<CheckboxButton value={value} disabled={disabled} selected={selected} onChange={onChangeValue} />}
      label={label}
    />
  ))

  return (
    <Box display="flex" flexDirection="column" width="100%">
      {titleLabel}
      <FormGroup row={isRow}>{content}</FormGroup>
    </Box>
  )
}

const StyledFormControlLabel = styled(FormControlLabel)(() => ({
  '& .MuiFormControlLabel-label': { color: Colors.gray6 },
}))

export default BaseCheckbox
