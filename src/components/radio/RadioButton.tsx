import { Radio, RadioProps } from '@mui/material'
import RadioUnchecked from '../../icons/RadioUnchecked'
import RadioChecked from '../../icons/RadioChecked'
import * as Colors from '../../colors'

interface RadioButtonProps extends RadioProps {}

const RadioButton = (props: RadioButtonProps) => {
  const { disabled } = props

  return (
    <Radio
      {...props}
      icon={<RadioUnchecked fill={disabled ? Colors.gray3 : undefined} />}
      checkedIcon={<RadioChecked />}
      sx={RadioStyle}
    />
  )
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

export default RadioButton
