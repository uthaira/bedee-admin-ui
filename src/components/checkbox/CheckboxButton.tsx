import { Checkbox } from '@mui/material'
import CheckboxUnchecked from '../../icons/CheckboxUnchecked'
import CheckboxChecked from '../../icons/CheckboxChecked'
import { ChangeEvent } from 'react'
import { Colors } from '../../colors'

interface CheckboxButtonProps {
  value?: any
  disabled?: boolean
  selected?: any
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  checked?: boolean
  disableColor?: string
}

const CheckboxButton = (props: CheckboxButtonProps) => {
  const { value, disabled, selected, onChange, checked, disableColor } = props

  return (
    <Checkbox
      sx={{ opacity: disabled && !disableColor ? 0.5 : 1 }}
      icon={<CheckboxUnchecked fill={disabled ? Colors.gray3 : undefined} />}
      checkedIcon={<CheckboxChecked fill={disabled ? disableColor : undefined} />}
      disabled={disabled}
      name={value}
      value={value}
      onChange={onChange}
      checked={selected ? selected.includes(value) : checked}
    />
  )
}

export default CheckboxButton
