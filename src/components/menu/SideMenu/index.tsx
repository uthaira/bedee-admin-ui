import { ListItemText, styled } from '@mui/material'
import LogOut from '../../../icons/LogOut'
import Header from './Header'
import GroupMenu from './MenuGroup'
import { Colors } from '../../../colors'

export interface SideMenuProps {
  menus: any[]
  visible: boolean
  username: string
  role: string
  version: string
  lastLoginDate?: string
  lastLoginTime?: string
  activeKey?: string
  onLogout?: () => void
  onVisible: () => void
}

const SideMenu = (props: SideMenuProps) => {
  const {
    menus = [],
    visible,
    username,
    role,
    version,
    onLogout,
    onVisible,
    lastLoginDate,
    lastLoginTime,
    activeKey = '',
  } = props

  const content = menus.map((it: any, i: number) => {
    return <GroupMenu item={it} visible={visible} key={i} activeKey={activeKey} />
  })

  const style = visible ? {} : { display: 'none' }
  const width = visible ? '280px' : '55px'
  return (
    <View style={{ width }}>
      <Padding>
        <Header
          visible={visible}
          username={username}
          role={role}
          version={version}
          onVisible={onVisible}
        />
        <MenuContent>
          {content}
        </MenuContent>

        <Footer>
          <Logout onClick={onLogout}>
            <LogOut />
            <ListItemText primaryTypographyProps={{ fontSize: 16,fontWeight: 100 }}>Logout</ListItemText>
          </Logout>
          {lastLoginDate &&  <ListItemText  primaryTypographyProps={{ fontSize: 10, fontWeight: 100, color:Colors.gray3  }} >Last logged in : {lastLoginDate} | {lastLoginTime} </ListItemText>}
          {version &&  <ListItemText  primaryTypographyProps={{ fontSize: 10, fontWeight: 100, color:Colors.gray3  }} >Version : {version || ''}</ListItemText>}
        </Footer>
      </Padding>
    </View>
  )
}

const View = styled('div')({
  width: '280px',
  height: '100vh',
  color: 'white',
  background: 'linear-gradient(175.42deg, #6C9EFF 3.15%, #3977EB 53.9%, #0056F3 95.95%)',
  position: 'fixed',
  top: 0,
  left: 0,
})

const Padding = styled('div')({
  padding: '8px',
})

const MenuContent = styled('div')({
  height: 'calc(100vh - 260px)',
  overflowY: 'auto',
  '&::-webkit-scrollbar': {
    width: '0px'
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: Colors.gray2,
    borderRadius: '0px',
  },
  '&::-webkit-scrollbar-thumb:hover': {
    backgroundColor: Colors.gray3,
  }
})

const Footer = styled('div')({
  width: 'calc(100% - 18px)',
  paddingTop: '8px',
})

const Logout = styled('div')({
  width: '100%',
  padding: '8px 0 4px',
  display: 'flex',
  alignItems: 'center',
  columnGap: '8px',
  cursor: 'pointer'
})

export default SideMenu