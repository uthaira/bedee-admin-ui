import { Box, Grid } from '@mui/material'
import { useState } from 'react'
import { ColumnBox } from "../layout"
import { Switch, SwitchLabel } from '../../components/switch'
import { Meta } from '@storybook/react'

type SwitchType = 'base' | 'label' | 'labelHint'
type SwitchSize = 'md' | 'sm'

export const SampleSwitch = () => {
  const [state, setState] = useState<{ [key in SwitchType]: { [key in SwitchSize]: boolean } }>({
    base: {
      md: true,
      sm: true,
    },
    label: {
      md: true,
      sm: true,
    },
    labelHint: {
      md: true,
      sm: true,
    }
  })

  const onChange = (type: SwitchType, size: SwitchSize) => {
    setState((prev) => {
      const curr = prev[type][size]
      prev[type][size] = !curr
      return { ...prev }
    })
  }

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={3} md={3}>
          <ColumnBox title="Switch">
            <Switch />
            <Switch bdSize="sm" />
          </ColumnBox>
        </Grid>
        <Grid item xs={3} md={3}>
          <ColumnBox title="disabled">
            <Switch disabled />
            <Switch disabled bdSize="sm" />
          </ColumnBox>
        </Grid>
        <Grid item xs={3} md={3}>
          <ColumnBox title="on">
            <Switch checked={state.base.md} onChange={() => onChange('base', 'md')} />
            <Switch bdSize="sm" checked={state.base.sm} onChange={() => onChange('base', 'sm')} />
          </ColumnBox>
        </Grid>
        <Grid item xs={3} md={3}>
          <ColumnBox title="disabled + on">
            <Switch disabled checked />
            <Switch disabled checked bdSize="sm" />
          </ColumnBox>
        </Grid>
      </Grid>
      <Grid container spacing={2} mt={4}>
        <Grid item xs={3} md={3}>
          <ColumnBox title="Switch Label">
            <SwitchLabel label="Option" />
            <SwitchLabel bdSize="sm" label="Option" />
          </ColumnBox>
        </Grid>
        <Grid item xs={3} md={3}>
          <ColumnBox title="disabled">
            <SwitchLabel label="Option" disabled />
            <SwitchLabel label="Option" disabled bdSize="sm" />
          </ColumnBox>
        </Grid>
        <Grid item xs={3} md={3}>
          <ColumnBox title="on">
            <SwitchLabel label="Option" checked={state.label.md} onChange={() => onChange('label', 'md')} />
            <SwitchLabel label="Option" bdSize="sm" checked={state.label.sm} onChange={() => onChange('label', 'sm')} />
          </ColumnBox>
        </Grid>
        <Grid item xs={3} md={3}>
          <ColumnBox title="disabled + on">
            <SwitchLabel label="Option" disabled checked />
            <SwitchLabel label="Option" disabled checked bdSize="sm" />
          </ColumnBox>
        </Grid>
      </Grid>
      <Grid container spacing={2} mt={4}>
        <Grid item xs={3} md={3}>
          <ColumnBox title="Switch Label (with Hint)">
            <SwitchLabel label="Option" hint="Hint" />
            <SwitchLabel bdSize="sm" label="Option" hint="Hint" />
          </ColumnBox>
        </Grid>
        <Grid item xs={3} md={3}>
          <ColumnBox title="disabled">
            <SwitchLabel label="Option" hint="Hint" disabled />
            <SwitchLabel label="Option" hint="Hint" disabled bdSize="sm" />
          </ColumnBox>
        </Grid>
        <Grid item xs={3} md={3}>
          <ColumnBox title="on">
            <SwitchLabel label="Option" hint="Hint" checked={state.labelHint.md} onChange={() => onChange('labelHint', 'md')} />
            <SwitchLabel label="Option" hint="Hint" bdSize="sm" checked={state.labelHint.sm} onChange={() => onChange('labelHint', 'sm')} />
          </ColumnBox>
        </Grid>
        <Grid item xs={3} md={3}>
          <ColumnBox title="disabled + on">
            <SwitchLabel label="Option" hint="Hint" disabled checked />
            <SwitchLabel label="Option" hint="Hint" disabled checked bdSize="sm" />
          </ColumnBox>
        </Grid>
      </Grid>
    </Box>
  )
}

export default {
  title: "Sample/Switch",
  component: SampleSwitch
} as Meta<typeof SampleSwitch>