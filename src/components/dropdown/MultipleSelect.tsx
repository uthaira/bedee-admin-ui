import Checkbox from '@mui/material/Checkbox'
import TextField from '../textfield/BaseTextField'
import Autocomplete from '@mui/material/Autocomplete'
import CheckboxUnchecked from '../../icons/CheckboxUnchecked'
import CheckboxChecked from '../../icons/CheckboxChecked'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import { Box, Typography, TypographyProps } from '@mui/material'
import { P2 } from '../text'

interface MultipleSelectProps {
  list?: any
  onChange?: (value: any, tag: any) => void
  tag?: string
  width?: string
  height?: string
  titleLabel?: string
  titleProps?: TypographyProps
  placeholder?: string
  headerListbox?: React.ReactNode
  selectedValue?: any
  disabled?: boolean
}

const MultipleSelect = (props: MultipleSelectProps) => {
  const {
    list,
    onChange = () => {},
    tag,
    width,
    height,
    titleLabel,
    titleProps,
    placeholder,
    headerListbox,
    selectedValue,
    disabled,
  } = props

  const onValueChange = (event: any, value: any) => {
    onChange(value, tag)
  }

  const icon = <CheckboxUnchecked />
  const checkedIcon = <CheckboxChecked />

  const displayTitle = titleLabel ? <Typography {...titleProps}>{titleLabel}</Typography> : undefined

  const renderHeaderListBox = () => (headerListbox ? headerListbox : undefined)

  return (
    <>
      {displayTitle}
      <Autocomplete
        onChange={onValueChange}
        multiple
        size="small"
        options={list}
        value={selectedValue}
        disabled={disabled}
        disableCloseOnSelect
        getOptionLabel={(option: any) => option?.name || option?.label || option}
        renderOption={(props, option, { selected }) => (
          <ListItem {...props}>
            <Box display="flex" alignItems="center" height={32} marginLeft={-2}>
              <Checkbox icon={icon} checkedIcon={checkedIcon} checked={selected} />
              <P2 text={option?.name || option?.label || option} />
            </Box>
          </ListItem>
        )}
        renderInput={(params) => (
          <TextField
            sx={{
              '& .MuiOutlinedInput-root .MuiAutocomplete-input': {
                height: height || '100%',
              },
            }}
            {...params}
            placeholder={placeholder}
            InputLabelProps={{ shrink: false }}
          />
        )}
        ListboxComponent={({ children, ...props }) => (
          <List {...props} sx={{ height: '200px' }}>
            {renderHeaderListBox()}
            {children}
          </List>
        )}
        sx={{ width: width || '100%' }}
      />
    </>
  )
}

export default MultipleSelect
