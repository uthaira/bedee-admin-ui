import { useState, useEffect } from 'react'
import { styled } from '@mui/material'

import SideMenu from '../menu/SideMenu'

const Layout = (props) => {
  const [visible, setVisible] = useState(true)
  const { username, role, version, children } = props

  useEffect(() => {
    const value = localStorage.getItem('bedee_menu')
    const v = value === 'none' ? false : true

    setVisible(v)
  }, [])

  const onVisible = () => {
    const v = !visible
    localStorage.setItem('bedee_menu', v ? 'display' : 'none')
    setVisible(v)
  }

  const width = visible ? '280px' : '55px'
  const padding = visible ? '16px 16px 0px 296px' : '16px 16px 0px 71px'
  return (
    <View>
      <MenuView style={{ width }}>
        <SideMenu
          visible={visible}
          username={username}
          role={role}
          version={version} 
          onVisible={onVisible}
        />
      </MenuView>
      <BodyView style={{ padding }}>
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