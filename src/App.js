import { Grid } from '@mui/material'

import { AdminLayout } from "./layout"
import SampleButton from "./sample/button"
import SampleDrawer from "./sample/drawer"

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
      </Grid>
    </AdminLayout>
  )
}

export default App
