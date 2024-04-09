import { Checkbox } from '@mui/material'
import CheckboxUnchecked from '../../icons/CheckboxUnchecked'
import CheckboxChecked from '../../icons/CheckboxChecked'
import { ChangeEvent } from 'react'
import * as Colors from '../../colors'

interface CheckboxButtonProps {
  value?: any
  disabled?: boolean
  selected?: any
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  checked?: boolean
}

const CheckboxButton = (props: CheckboxButtonProps) => {
  const { value, disabled, selected, onChange, checked } = props

  return (
    <Checkbox
      sx={{ opacity: disabled ? 0.5 : 1 }}
      icon={<CheckboxUnchecked fill={disabled ? Colors.gray3 : undefined} />}
      checkedIcon={<CheckboxChecked />}
      disabled={disabled}
      name={value}
      value={value}
      onChange={onChange}
      checked={selected ? selected.includes(value) : checked}
    />
  )
}

export default CheckboxButton
