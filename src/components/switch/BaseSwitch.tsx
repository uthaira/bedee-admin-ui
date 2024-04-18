import { styled, Switch as MuiSwitch, SwitchProps as MuiSwitchProps } from "@mui/material"
import { Colors } from "../../colors"

export interface SwitchProps extends MuiSwitchProps {
  bdSize?: string
}

type Style = {
  width: number
  height: number
  mt: number
  ml: number
  transform: string
}

type StyleDict = {
  [key: string]: Style
}

const Switch = (props: SwitchProps) => {
  const { bdSize } = props

  const getSize = (): Style => {
    const mapSize: StyleDict = {
      md: {
        width: 48,
        height: 24,
        mt: 2,
        ml: 3,
        transform: 'translateX(22px)',
      },
      sm: {
        width: 36,
        height: 18,
        mt: 1,
        ml: 2,
        transform: 'translateX(16px)',
      }
    }

    return mapSize[bdSize ?? "md"]
  }

  return <StyledSwitch {...props} {...getSize()} />
}

const StyledSwitch = styled((props) => (
  <MuiSwitch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))((props: Style) => ({
  width: props.width,
  height: props.height,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    marginTop: props.mt,
    marginLeft: props.ml,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: props.transform,
      color: Colors.white,
      "& + .MuiSwitch-track": {
        backgroundColor: Colors.primary001,
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
        color: Colors.primary004
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: Colors.primary001,
      border: `6px solid ${Colors.white}`,
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color: Colors.white,
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: 0.5,
      color: Colors.gray2
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: props.width === 48 ? 20 : 15,
    height: props.height === 24 ? 20 : 15,
  },
  "& .MuiSwitch-track": {
    borderRadius: 24,
    backgroundColor: Colors.gray3,
    opacity: 1,
  },
}));

export default Switch;