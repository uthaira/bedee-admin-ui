import Layout from "./components/layout"

const App = () => {
  const username = 'Admin@bedee.com'
  const role = 'Super Admin'
  const version = '1.2.5'
  const onLogout = () => {}

  return (
    <Layout 
      username={username}
      role={role}
      version={version}
      onLogout={onLogout}>
        Bedee Admin UI
    </Layout>
  )
}


export default App
