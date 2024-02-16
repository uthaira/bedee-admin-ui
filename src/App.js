import { AdminLayout } from "./layout"

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
        Bedee Admin UI
    </AdminLayout>
  )
}


export default App
