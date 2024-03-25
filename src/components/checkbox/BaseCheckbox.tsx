import { Box, Checkbox, FormControlLabel, FormGroup, Typography } from '@mui/material'
import * as Colors from '../../colors'
import { ChangeEvent } from 'react'

interface CheckBoxGroupData {
  key: string
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
  return (
    <Box display="flex" flexDirection="column" width="100%">
      {titleLabel}
      <FormGroup row={isRow}>
        {data.map((ms) => (
          <FormControlLabel
            key={ms.value}
            control={<Checkbox disabled={ms.disabled} name={ms.value} value={ms.value} onChange={onChangeValue} checked={selected.includes(ms.value)} />}
            sx={FormControlLabelStyle}
            label={ms.key}
          />
        ))}
      </FormGroup>
    </Box>
  )
}

const FormControlLabelStyle = {
  '& .MuiFormControlLabel-label': { color: Colors.gray6 },
}

export default BaseCheckbox
