import { FormControlLabel, Radio, RadioGroup as MuiRadioGroup, Box, Typography } from '@mui/material'
import * as Colors from '../../colors'
import { ChangeEvent } from 'react'

interface RadioGroupData {
  key: string
  value: string | number
}

interface RadioGroupProps {
  name?: string
  data: RadioGroupData[]
  value: string | number
  onChange: (event: ChangeEvent<HTMLInputElement>, name?: string) => void
  isRow?: boolean
  title?: string
  disabled?: boolean
}

const RadioGroup = (props: RadioGroupProps) => {
  const { name, data, value, onChange, isRow = false, title, disabled } = props

  const onChangeValue = (event: any) => onChange(event.target.value, name)

  const titleLabel = title ? (
    <Typography color={Colors.gray6} fontSize={15} fontWeight={600}>
      {title}
    </Typography>
  ) : undefined
  return (
    <Box display="flex" flexDirection="column" width="100%">
      {titleLabel}
      <MuiRadioGroup onChange={onChangeValue} row={isRow}>
        {data.map((radio) => (
          <FormControlLabel
            key={radio.value}
            checked={value == radio.value}
            value={radio.value}
            control={<Radio sx={RadioStyle} />}
            sx={FormControlLabelStyle}
            label={radio.key}
            disabled={disabled}
          />
        ))}
      </MuiRadioGroup>
    </Box>
  )
}

const FormControlLabelStyle = {
  '& .MuiFormControlLabel-label': { color: Colors.gray6 },
}

const RadioStyle = {
  '&.MuiRadio-root': {
    color: Colors.gray3,
    '&.Mui-disabled': {
      opacity: 0.5,
    },
    '&.Mui-checked': {
      color: Colors.primary001,
      '&.Mui-disabled': {
        opacity: 0.5,
      },
    },
  },
}

export default RadioGroup
