import { Box, Grid, Typography } from "@mui/material";
import Switch, { SwitchProps } from "./BaseSwitch";
import { Colors } from '../../colors'

interface SwitchLabelProps extends SwitchProps {
  label: string
  hint?: string
}

type FontSizes = {
  label: number
  hint: number
}

type FontSizeDict = {
  [key in string]: FontSizes;
};

const SwitchLabel = (props: SwitchLabelProps) => {
  const { label, hint = "", bdSize } = props

  const fontSize = (): FontSizes => {
    const fontSizeMap: FontSizeDict = {
      md: {
        label: 16,
        hint: 14
      },
      sm: {
        label: 12,
        hint: 10
      }
    }

    return fontSizeMap[bdSize ?? "md"]
  }

  const fs = fontSize()

  return (
    <Grid container spacing={1}>
      <Grid item>
        <Switch {...props} />
      </Grid>
      <Grid item>
        <Box>
          <Typography color={Colors.gray5} fontSize={fs.label}>{label}</Typography>
        </Box>
        <Box>
          <Typography color={Colors.gray4} fontSize={fs.hint}>{hint}</Typography>
        </Box>
      </Grid>
    </Grid>
  )
}

export default SwitchLabel