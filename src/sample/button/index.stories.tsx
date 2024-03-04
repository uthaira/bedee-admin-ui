import { Grid } from '@mui/material'
import { ColumnBox } from "../layout"
import { PrimaryBtn, Btn, OutlinedBtn, RemoveBtn } from "../../components/button"
import { Meta } from '@storybook/react'

export const SampleButton = () => {
  const primaryList = []
  const secondaryList = []
  const outlinedList = []
  const removeList = []

  let index = 0
  for (const item of list) {
    const { text, bdSize, disabled, loading } = item
    primaryList.push(
      <PrimaryBtn key={`primary-${index}`} text={text} bdSize={bdSize} disabled={disabled} loading={loading} />
    )

    secondaryList.push(
      <Btn key={`secondery-${index}`} text={text} bdSize={bdSize} disabled={disabled} loading={loading} />
    )

    outlinedList.push(
      <OutlinedBtn key={`outlined-${index}`} text={text} bdSize={bdSize} disabled={disabled} loading={loading} />
    )

    removeList.push(
      <RemoveBtn key={`remove-${index}`} text={text} bdSize={bdSize} disabled={disabled} loading={loading} />
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
          {secondaryList}
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

const list: { text: string, bdSize: string, loading?: boolean, disabled?: boolean }[] = [
  { text: 'Size LG', bdSize: 'lg' },
  { text: 'Size MD', bdSize: 'md' },
  { text: 'Size SM', bdSize: 'sm' },
  { text: 'Loading SM', bdSize: 'sm', loading: true },
  { text: 'Disabled (XS)', bdSize: 'xs', disabled: true },
]

export default {
  title: "Sample/Button",
  component: SampleButton
} as Meta<typeof SampleButton>
