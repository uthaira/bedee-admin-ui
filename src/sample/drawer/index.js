import { useState } from 'react'
import { Grid } from '@mui/material'

import { Box } from "../layout"
import { Btn } from "../../button"
import Drawer from "../../drawer"

const SampleButton = () => {
  const [position, setPosition] = useState(undefined)

  const onClose = () => setPosition(undefined)
  const onTop = () => setPosition('top')
  const onRight = () => setPosition('right')
  const onBottom = () => setPosition('bottom')
  const onLeft = () => setPosition('left')

  return (
    <>
      <Drawer
        open={position !== undefined} 
        position={position}
        title="Title Drawer" 
        text="Apple Filter" 
        conner="Clear"
        onClose={onClose}>
        {list.map((txt, i) => {
          return <div key={i}>{txt}</div>
        })}
      </Drawer>
      <Box title="Drawer">
        <Grid container spacing={2}>
          <Grid item xs={3} md={3}>
            <Btn text="Top" size="md" onClick={onTop} />
          </Grid>
          <Grid item xs={3} md={3}>
            <Btn text="Right" size="md" onClick={onRight} />
          </Grid>
          <Grid item xs={3} md={3}>
            <Btn text="bottom" size="md" onClick={onBottom} />
          </Grid>
          <Grid item xs={3} md={3}>
            <Btn text="Left" size="md" onClick={onLeft} />
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

const list = [
  'Alabama',
  'Alexander City',
  'Andalusia',
  'Anniston',
  'Bessemer',
  'Birmingham',
  'Chickasaw',
  'Clanton',
  'Decatur',
  'Demopolis',
  'Dothan',
  'Enterprise',
  'Eufaula',
  'Florence',
  'Fort Payne',
  'Gadsden',
  'Greenville',
  'Guntersville',
  'Huntsville',
  'Jasper',
  'Marion',
  'Mobile',
  'Kingman',
  'Lake Havasu City',
  'Newport',
  'North Little Rock',
  'Coronado',
  'Fremont',
  'Lodi',
  'Breckenridge',
  'Alabama',
  'Alexander City',
  'Andalusia',
  'Anniston',
  'Bessemer',
  'Birmingham',
  'Chickasaw',
  'Clanton',
  'Decatur',
  'Demopolis',
  'Dothan',
  'Enterprise',
  'Eufaula',
  'Florence',
  'Fort Payne',
  'Gadsden',
  'Greenville',
  'Guntersville',
  'Huntsville',
  'Jasper',
  'Marion',
  'Mobile',
  'Kingman',
  'Lake Havasu City',
  'Newport',
  'North Little Rock',
  'Coronado',
  'Fremont',
  'Lodi',
  'Breckenridge',
]

export default SampleButton
