import { useState } from 'react'
import { Grid } from '@mui/material'
import { Box } from "../layout"
import Drawer, { Position } from '../../components/drawer'
import { Btn } from '../../components/button'
import { Meta } from '@storybook/react'

export const SampleDrawer = () => {
  const [state, setState] = useState<{ [key in Position]: boolean }>({
    top: false,
    right: false,
    bottom: false,
    left: false,
  });

  const onClick = (position: string, open: boolean) => setState({ ...state, [position]: open })

  const positions: Position[] = ['top', 'right', 'bottom', 'left']

  return (
    <>
      {positions.map((pos, index) => (
        <Drawer
          key={index}
          open={state[pos]}
          position={pos}
          title="Title Drawer"
          text="Apple Filter"
          corner="Clear"
          onClose={() => onClick(pos, false)}>
          {list.map((txt, i) => (<div key={i}>{txt}</div>))}
        </Drawer>
      ))}
      <Box title="Drawer">
        <Grid container spacing={2}>
          <Grid item xs={3} md={3}>
            <Btn text="Top" bdSize="md" onClick={() => onClick('top', true)} />
          </Grid>
          <Grid item xs={3} md={3}>
            <Btn text="Right" bdSize="md" onClick={() => onClick('right', true)} />
          </Grid>
          <Grid item xs={3} md={3}>
            <Btn text="Bottom" bdSize="md" onClick={() => onClick('bottom', true)} />
          </Grid>
          <Grid item xs={3} md={3}>
            <Btn text="Left" bdSize="md" onClick={() => onClick('left', true)} />
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

export default {
  title: "Sample/Drawer",
  component: SampleDrawer
} as Meta<typeof SampleDrawer>