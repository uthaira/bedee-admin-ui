import {
  Stack,
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps,
  styled,
  Typography,
  TypographyProps as MuiTypographyProps,
  Box,
} from '@mui/material'
import ClearIcon from '../../icons/ClearIcon'
import { Colors } from '../../colors'

interface BaseTextFieldProps {
  bdSize?: string
  width?: string | number
  titleLabel?: string
  value?: string
  limit?: number
  tag?: any
  bdOnChange?: (value: string, tag?: string) => void
  icon?: React.ReactNode
  onClickIcon?: () => void
  titleProps?: MuiTypographyProps
}

type Style = {
  height?: number | string
  width?: number | string
}

type StyleDict = {
  [key: string]: Style
}

const BaseTextField = (props: BaseTextFieldProps & MuiTextFieldProps) => {
  const { bdSize, titleLabel, value, limit, bdOnChange = () => {}, tag, disabled, icon, onClickIcon, width = '100%', titleProps } = props

  const getSize = (): Style => {
    const mapSize: StyleDict = {
      lg: {
        height: 56,
      },
      md: {
        height: 48,
      },
      sm: {
        height: 40,
      },
    }

    return mapSize[bdSize ?? 'md']
  }

  const renderLabel = () => {
    if (!titleLabel) return undefined

    return (
      <Typography {...titleProps}>
        {titleLabel}
      </Typography>
    )
  }

  const renderCounter = () => {
    if (!limit) return undefined

    const val = value || ''
    const len = val.length
    return (
      <Typography variant="caption">
        {len}/{limit}
      </Typography>
    )
  }

  const onClearClick = () => {
    bdOnChange('', tag)
  }

  const renderClearBtn = () => {
    if (!value || value === '' || disabled) return

    return (
      <Box onClick={onClearClick} sx={{ cursor: 'pointer' }}>
        <ClearIcon />
      </Box>
    )
  }

  const renderIcon = () => {
    if (!icon) return

    return (
      <Box onClick={onClickIcon} sx={{ cursor: 'pointer' }}>
        {icon}
      </Box>
    )
  }

  const onChangeValue = (e: any) => {
    const val = e.target.value || ''

    if (limit && val.length > limit) return

    if (val === ' ') return

    bdOnChange(val, tag)
  }

  return (
    <Stack width={width}>
      {renderLabel()}
      <StyledTextField
        width={width}
        value={value}
        onChange={onChangeValue}
        InputProps={{
          endAdornment: (
            <Stack direction="row" alignItems="center" justifyContent="center" spacing={2}>
              {renderClearBtn()}
              {renderCounter()}
              {renderIcon()}
            </Stack>
          ),
        }}
        {...props}
        {...getSize()}
      />
    </Stack>
  )
}

const StyledTextField = styled((props) => <MuiTextField {...props} />)((props: Style) => ({
  width: props.width ?? '100%',
  '& .MuiOutlinedInput-root': {
    color: Colors.gray5,
    borderRadius: 8,
    '& fieldset': {
      borderColor: Colors.gray3,
    },
    '&:hover fieldset': {
      borderColor: Colors.gray3,
    },
    '&.Mui-focused fieldset': {
      borderColor: Colors.gray3,
    },
  },
  '& .MuiInputBase-input': {
    width: '100%',
    padding: '0px 0px 0px 8px',
    height: props.height,
    '&.Mui-disabled': {
      backgroundColor: Colors.gray1,
    },
  },
  '& .MuiInputBase-input.Mui-disabled': {
    WebkitTextFillColor: Colors.gray4,
  },
  '& .MuiInputBase-input::placeholder': {
    color: Colors.gray4,
  },
  '& .css-o9k5xi-MuiInputBase-root-MuiOutlinedInput-root.Mui-disabled': {
    backgroundColor: Colors.gray1,
  },
}))

export default BaseTextField
