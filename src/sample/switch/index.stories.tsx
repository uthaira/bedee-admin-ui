import { Grid } from '@mui/material'
import { useState } from 'react'
import { ColumnBox } from "../layout"
import { Switch } from '../../components/switch'
import { Meta } from '@storybook/react'

export const SampleSwitch = () => {
  const [onMd, setOnMd] = useState(true)
  const [onSm, setOnSm] = useState(true)

  return (
    <Grid container spacing={2}>
      <Grid item xs={3} md={3}>
        <ColumnBox title="Switch">
          <Switch />
          <Switch bdSize="sm" />
        </ColumnBox>
      </Grid>
      <Grid item xs={3} md={3}>
        <ColumnBox title="Switch (Disabled)">
          <Switch disabled />
          <Switch disabled bdSize="sm" />
        </ColumnBox>
      </Grid>
      <Grid item xs={3} md={3}>
        <ColumnBox title="Switch (On)">
          <Switch checked={onMd} onChange={() => setOnMd(!onMd)} />
          <Switch bdSize="sm" checked={onSm} onChange={() => setOnSm(!onSm)} />
        </ColumnBox>
      </Grid>
      <Grid item xs={3} md={3}>
        <ColumnBox title="Switch (Disabled + On)">
          <Switch disabled checked />
          <Switch disabled checked bdSize="sm" />
        </ColumnBox>
      </Grid>
    </Grid>
  )
}

export default {
  title: "Sample/Switch",
  component: SampleSwitch
} as Meta<typeof SampleSwitch>