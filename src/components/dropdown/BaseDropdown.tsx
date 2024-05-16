import {
  Box,
  Typography,
  TypographyProps as MuiTypographyProps,
  SelectProps as MuiSelectProps,
  MenuItem,
  styled,
} from '@mui/material'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { Colors } from '../../colors'

interface DropdownProps {
  titleLabel?: string
  data?: any
  height?: string | number
  width?: string | number
  tag?: any
  bdOnChange?: (value: any, tag: any) => void
  titleProps?: MuiTypographyProps
}

const BaseDropdown = (props: DropdownProps & MuiSelectProps) => {
  const { titleLabel, titleProps, data = [], tag, bdOnChange = () => {} } = props

  const displayTitle = titleLabel ? <Typography {...titleProps}>{titleLabel}</Typography> : undefined

  const content =
    data.length > 0 &&
    data.map((item: any, index: number) => (
      <MenuItem key={index} value={item.value || item}>
        <Typography>{item.label || item}</Typography>
      </MenuItem>
    ))

  const onChangeValue = (event: SelectChangeEvent<any>) => {
    bdOnChange(event.target.value, tag)
  }

  return (
    <Box display="flex" flexDirection="column" width="100%">
      {displayTitle}
      <SelectStyle
        onChange={onChangeValue}
        MenuProps={{ slotProps: { paper: { sx: { maxHeight: '180px', overflowY: 'auto' } } } }}
        {...props}
      >
        {content}
      </SelectStyle>
    </Box>
  )
}

const SelectStyle = styled(Select)((props: any) => ({
  color: Colors.gray6,
  width: props.width || '100%',
  height: props.height,
  borderRadius: '8px',
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: Colors.gray0,
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: Colors.gray0,
  },
  '& .MuiSelect-nativeInput':
    !props.value || props.value === ''
      ? {
          top: 0,
          paddingLeft: 10,
          opacity: 0.8,
          fontSize: '14px',
          border: 'none',
        }
      : {},
  '&.Mui-disabled': {
    backgroundColor: Colors.gray2,
    opacity: 0.5,
    pointerEvents: 'none',
  },
  '& .MuiSelect-nativeInput::placeholder': {
    color: Colors.gray4,
  }
}))

export default BaseDropdown
