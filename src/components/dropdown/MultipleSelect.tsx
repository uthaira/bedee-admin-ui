import Checkbox from '@mui/material/Checkbox'
import TextField from '../textfield/BaseTextField'
import Autocomplete from '@mui/material/Autocomplete'
import CheckboxUnchecked from '../../icons/CheckboxUnchecked'
import CheckboxChecked from '../../icons/CheckboxChecked'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import { Box, IconButton, Stack, Typography, TypographyProps } from '@mui/material'
import { Mini, P2 } from '../text'
import Close from '../../icons/Close'
import { Colors } from '../../colors'

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
    <Stack>
      {displayTitle}
      <Autocomplete
        onChange={onValueChange}
        multiple
        size="small"
        options={list}
        value={selectedValue}
        disabled={disabled}
        disableCloseOnSelect
        isOptionEqualToValue={(option, value) => option.id === value.id}
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
        renderTags={(value: any[], getTagProps) =>
          value.map((option, index) => (
            <Box
              key={index}
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                backgroundColor: Colors.gray2,
                px: '8px',
                py: '4px',
                borderRadius: '16px',
              }}
            >
              <Mini text={option.name} color={Colors.gray7} />
              <IconButton
                size="small"
                sx={{ ml: 0.5, bgcolor: Colors.white }}
                onClick={() =>
                  onValueChange(
                    null,
                    selectedValue.filter((val: any) => val !== option)
                  )
                }
              >
                <Close width="10" color={Colors.gray4} />
              </IconButton>
            </Box>
          ))
        }
        ListboxComponent={({ children, ...props }) => (
          <List {...props} sx={{ height: '200px' }}>
            {renderHeaderListBox()}
            {children}
          </List>
        )}
        sx={{ width: width || '100%' }}
      />
    </Stack>
  )
}

export default MultipleSelect
