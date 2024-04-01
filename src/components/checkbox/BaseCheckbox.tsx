import { Box, Checkbox, FormControlLabel, FormGroup, Typography, styled } from '@mui/material'
import * as Colors from '../../colors'
import { ChangeEvent } from 'react'
import CheckboxUnChecked from '../../icons/CheckboxUnchecked'
import CheckboxChecked from '../../icons/CheckboxChecked'

interface CheckBoxGroupData {
  label?: string
  value: string
  disabled?: boolean
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

  const checkbox = ({ value, disabled }: CheckBoxGroupData) => (
    <Checkbox
      sx={{ opacity: disabled ? 0.5 : 1 }}
      icon={<CheckboxUnChecked />}
      checkedIcon={<CheckboxChecked />}
      disabled={disabled}
      name={value}
      value={value}
      onChange={onChangeValue}
      checked={selected.includes(value)}
    />
  )

  const content = data.map(({ label, value, disabled }, index) => (
    <StyledFormControlLabel key={index} control={checkbox({ value, disabled })} label={label} />
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
