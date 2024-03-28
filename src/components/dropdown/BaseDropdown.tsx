import { Box, Typography, SelectProps as MuiSelectProps, MenuItem, styled } from '@mui/material'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import * as Colors from '../../colors'

interface DropdownProps extends MuiSelectProps {
  titleLabel?: string
  data?: any
  height?: string | number
  width?: string | number
  tag?: any
  onChange?: (value: any, tag: any) => void
}

const BaseDropdown = (props: DropdownProps) => {
  const { titleLabel, data = [], tag, onChange = () => {} } = props

  const displayTitle = titleLabel ? (
    <Typography color={Colors.gray6} fontSize={15} fontWeight={600}>
      {titleLabel}
    </Typography>
  ) : undefined

  const content =
    data.length > 0 &&
    data.map((item: any, index: number) => (
      <MenuItem key={index} value={item.value || item}>
        <Typography>{item.label || item}</Typography>
      </MenuItem>
    ))

  const onChangeValue = (event: SelectChangeEvent<any>) => {
    onChange(event.target.value, tag)
  }

  return (
    <Box display="flex" flexDirection="column" width="100%" gap={1}>
      {displayTitle}
      <SelectStyle onChange={onChangeValue} {...props}>
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
    borderColor: Colors.gray2,
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: Colors.gray2,
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
}))

export default BaseDropdown
