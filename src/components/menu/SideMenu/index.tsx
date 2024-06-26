import { ListItemText, styled } from '@mui/material'
import LogOut from '../../../icons/LogOut'
import Header from './Header'
import GroupMenu from './MenuGroup'
import { Colors } from '../../../colors'
import DoubleChevronLeft from '../../../icons/DoubleChevronLeft'
import DoubleChevronRight from '../../../icons/DoubleChevronRight'

export type Menu = {
  title?: string;
  icon?: string;
  permission?: Array<any>;
  minActive?: Array<string>;
  active?: string;
  list?: Array<Menu>;
  status?: string;
  link?: string
  renderLink?: any;
};

export interface SideMenuProps {
  menus: Menu[]
  visible: boolean
  username: string
  role: string
  version: string
  lastLoginDate?: string
  lastLoginTime?: string
  activeKey?: string
  onLogout?: () => void
  onVisible: () => void
  menuWidth?: string
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
    menuWidth = '280px',
  } = props

  const content = menus.map((it: any, i: number) => {
    return <GroupMenu item={it} visible={visible} key={i} activeKey={activeKey} onVisible={onVisible} />
  })

  const style = visible ? {} : { display: 'none' }
  const width = visible ? menuWidth : '55px'
   const collapseClassName = visible ? '' : 'collapse'
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

        <Footer className={collapseClassName}>
          <Logout className={collapseClassName} onClick={onLogout}>
            <LogOut />
            <ListItemText style={style} primaryTypographyProps={{ fontSize: 16,fontWeight: 400 }}>Logout</ListItemText>
          </Logout>
          {lastLoginDate &&  <ListItemText style={style} primaryTypographyProps={{ fontSize: 12, fontWeight: 400, color:Colors.gray3  }} >Last logged in : {lastLoginDate} | {lastLoginTime} </ListItemText>}
          {version &&  <ListItemText style={style} primaryTypographyProps={{ fontSize: 12, fontWeight: 400, color:Colors.gray3  }} >Version : {version || ''}</ListItemText>}
        </Footer>
      </Padding>
      {visible ?    
      <CollapseInButton onClick={onVisible}>
        <DoubleChevronLeft />
      </CollapseInButton> :    
      <CollapseOutButton onClick={onVisible}>
        <DoubleChevronRight />
      </CollapseOutButton>}
    </View>
  )
}

const View = styled('div')({
  width: '280px',
  height: '100vh',
  color: 'white',
  background: 'linear-gradient(175.42deg, #6C9EFF 3.15%, #3977EB 53.9%, #0056F3 95.95%)',
  position: 'relative',
  top: 0,
  left: 0,
})

const Padding = styled('div')({
  padding: '8px',
})

const MenuContent = styled('div')({
  height: 'calc(100vh - 300px)',
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
  '&.collapse' : {
    width: '100%',
    textAlign: 'center',
  }
})

const Logout = styled('div')({
  width: '100%',
  padding: '8px 0 4px',
  display: 'flex',
  alignItems: 'center',
  columnGap: '8px',
  cursor: 'pointer',
  '&.collapse' : {
    display: 'contents'
  }
})

const CollapseInButton = styled('div')({
  textAlign: 'center',
  color: 'white',
  position: 'absolute',
  top: 20,
  right: 0,
  borderRadius: '4px 0px 0px 4px',
  background: '#F7F8F9',
  cursor: 'pointer',
  'svg': {
    width: '10px',
    height: '8px',
  },
  padding: '8px 10px',
  boxShadow: 'rgba(0, 0, 0, 0.1) 0px 2px 4px',
})

const CollapseOutButton = styled(CollapseInButton)({
  right: -30,
  borderRadius: '0px 4px 4px 0px',
  'svg': {
    width: '12px',
    height: '12px',
  },
  zIndex: '100',
})

export default SideMenu