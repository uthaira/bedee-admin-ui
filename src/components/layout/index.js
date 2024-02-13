import { styled } from '@mui/material'

import SideMenu from '../menu/SideMenu'

const Layout = (props) => {
  const { children } = props
  return (
    <View>
      <MenuView>
        <SideMenu />
      </MenuView>
      <BodyView>
        <ContentView>
          {children}
        </ContentView>
      </BodyView>
    </View>
  )
}

const View = styled('div')({
  width: '100%',
  display: 'flex',
  flexFlow: 'row wrap',
})

const MenuView = styled('div')({
  display: 'block',
  width: '280px',
})

const BodyView = styled('div')({
  display: 'block',
  width: '100%',
  minHeight: '100vh',
  padding: '16px 16px 0px 296px',
  backgroundColor: '#F7F8F9',
})

const ContentView = styled('div')({
  display: 'block',
  width: '100%',
})

export default Layout