import { Grid } from '@mui/material'

import { ColumnBox } from "../layout"
import { PrimaryBtn, Btn, OutlinedBtn, RemoveBtn } from "../../button"

const SampleButton = () => {
  const primaryList = []
  const seconderyList = []
  const outlinedList = []
  const removeList = []

  let index = 0
  for (const item of list) {
    const { text, size, disabled, loading } = item
    primaryList.push(
      <PrimaryBtn key={`primary-${index}`} text={text} size={size} disabled={disabled} loading={loading} />
    )

    seconderyList.push(
      <Btn key={`secondery-${index}`} text={text} size={size} disabled={disabled} loading={loading} />
    )

    outlinedList.push(
      <OutlinedBtn key={`outlined-${index}`} text={text} size={size} disabled={disabled} loading={loading} />
    )

    removeList.push(
      <RemoveBtn key={`remove-${index}`} text={text} size={size} disabled={disabled} loading={loading} />
    )

    index++
  }
  return (
    <Grid container spacing={2}>
      <Grid item xs={3} md={3}>
        <ColumnBox title="Primary Button">
          {primaryList}
        </ColumnBox>
      </Grid>
      <Grid item xs={3} md={3}>
        <ColumnBox title="Secondery Button">
          {seconderyList}
        </ColumnBox>
      </Grid>
      <Grid item xs={3} md={3}>
        <ColumnBox title="Outlined Button">
          {outlinedList}
        </ColumnBox>
      </Grid>
      <Grid item xs={3} md={3}>
        <ColumnBox title="Remove Button">
          {removeList}
        </ColumnBox>
      </Grid>
    </Grid>
  )
}

const list = [
  { text: 'Size LG', size: 'lg' },
  { text: 'Size MD', size: 'md' },
  { text: 'Size SM', size: 'sm' },
  { text: 'Loading SM', size: 'sm', loading: 'true' },
  { text: 'Disabled (XS)', size: 'xs', disabled: true },
]

export default SampleButton
