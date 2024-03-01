import { Grid } from '@mui/material'

import { AdminLayout } from "./layout"
import SampleButton from "./sample/button"
import SampleDrawer from "./sample/drawer"
import SampleSwitch from './sample/switch'

const App = () => {
  const username = 'Admin@bedee.com'
  const role = 'Super Admin'
  const version = '1.2.5'
  const onLogout = () => {}

  return (
    <AdminLayout 
      username={username}
      role={role}
      version={version}
      onLogout={onLogout}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <SampleButton />
        </Grid>

        <Grid item xs={4}>
          <SampleDrawer />
        </Grid>

        <Grid item xs={8}>
          <SampleSwitch />
        </Grid>
      </Grid>
    </AdminLayout>
  )
}

export default App
