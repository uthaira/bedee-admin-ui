import { H1, H2, H3, H4, H5, H6, Lead1, Lead2, Mini, P1, P2, Tiny } from "../../components/text"
import { Box, Grid } from "@mui/material"
import { Meta } from "@storybook/react"

export const SampleText = () => {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12}><H1 text=">>MD(Dest)/H/H1" /></Grid>
        <Grid item xs={12}><H2 text=">>MD(Dest)/H/H2" /></Grid>
        <Grid item xs={12}><H3 text=">>MD(Dest)/H/H3" /></Grid>
        <Grid item xs={12}><H4 text=">>MD(Dest)/H/H4" /></Grid>
        <Grid item xs={12}><H5 text=">>MD(Dest)/H/H5" /></Grid>
        <Grid item xs={12}><H6 text=">>MD(Dest)/H/H6" /></Grid>
        <Grid item xs={12}><P1 text=">>MD(Dest)/P/P1" /></Grid>
        <Grid item xs={12}><P2 text=">>MD(Dest)/P/P2" /></Grid>
        <Grid item xs={12}><Lead1 text=">>MD(Dest)/P/Lead1" /></Grid>
        <Grid item xs={12}><Lead2 text=">>MD(Dest)/P/Lead2" /></Grid>
        <Grid item xs={12}><Mini text=">>MD(Dest)/Small/Mini" /></Grid>
        <Grid item xs={12}><Tiny text=">>MD(Dest)/Small/Tiny" /></Grid>
      </Grid>
    </Box>
  )
}

export default {
  title: "Sample/Text",
  component: SampleText
} as Meta<typeof SampleText>