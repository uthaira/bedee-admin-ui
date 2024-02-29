import { Grid } from '@mui/material'
import { useState } from 'react'

import { ColumnBox } from "../layout"
import { Switch } from "../../switch"

const SampleSwitch = () => {
  const [onMd, setOnMd] = useState(true)
  const [onSm, setOnSm] = useState(true)

  return (
    <Grid container spacing={2}>
      <Grid item xs={3} md={3}>
        <ColumnBox title="Switch">
          <Switch />
          <Switch size="sm" />
        </ColumnBox>
      </Grid>
      <Grid item xs={3} md={3}>
        <ColumnBox title="Switch (Disabled)">
          <Switch disabled />
          <Switch disabled size="sm" />
        </ColumnBox>
      </Grid>
      <Grid item xs={3} md={3}>
        <ColumnBox title="Switch (On)">
          <Switch checked={onMd} onChange={() => setOnMd(!onMd)} />
          <Switch size="sm" checked={onSm} onChange={() => setOnSm(!onSm)} />
        </ColumnBox>
      </Grid>
      <Grid item xs={3} md={3}>
        <ColumnBox title="Switch (Disabled + On)">
          <Switch disabled checked />
          <Switch disabled checked size="sm" />
        </ColumnBox>
      </Grid>
    </Grid>
  )
}

export default SampleSwitch