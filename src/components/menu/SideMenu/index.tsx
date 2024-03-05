import { styled } from '@mui/material'
import LogOut from '../../../icons/LogOut'
import Header from './Header'
import GroupMenu from './MenuGroup'

export interface SideMenuProps {
  menus: any[]
  visible: boolean
  username: string
  role: string
  version: string
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
    onVisible
  } = props

  const content = menus.map((it: any, i: number) => {
    return <GroupMenu item={it} visible={visible} key={i} />
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
            <LogoutText style={style}>Logout</LogoutText>
          </Logout>
          <Version style={style}>{version || ''}</Version>
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
  padding: '16px',
})

const MenuContent = styled('div')({
  height: 'calc(100vh - 220px)',
  overflow: 'scroll',
})

const Footer = styled('div')({
  width: 'calc(100% - 18px)',
  paddingTop: '8px',
})

const Logout = styled('div')({
  width: '100%',
  paddingBottom: '8px',
  display: 'flex',
  alignItems: 'center',
  columnGap: '8px',
  cursor: 'pointer'
})

const LogoutText = styled('div')({
  width: '100%',
})

const Version = styled('div')({
  width: '100%',
  fontSize: '14px',
})

export default SideMenu