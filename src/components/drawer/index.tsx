import { Divider, Drawer as MuiDrawer, Typography, styled } from '@mui/material'

import { PrimaryButton } from '../button'
import Close from '../../icons/Close'

export type Position = 'top' | 'right' | 'bottom' | 'left'

export interface DrawerProps {
  open: boolean
  title: string
  buttonText: string
  corner?: string
  position: Position
  width?: string | number
  onClose?: () => void
  onClick?: () => void
  onCorner?: () => void
  children: React.ReactNode
}

export const Drawer = (props: DrawerProps) => {
  const { open, title, buttonText, corner, position = 'right', width, onClose, onClick, onCorner, children } = props

  const connerBtn = corner ? (
    <Conner onClick={onCorner}>
      <Typography noWrap fontSize={14}>
        {corner}
      </Typography>
    </Conner>
  ) : undefined
  return (
    <MuiDrawer anchor={position} open={open} onClose={onClose}>
      <View style={{ width }}>
        <MenuView>
          <CloseBar>
            <CloseBtn onClick={onClose}>
              <Close />
            </CloseBtn>
          </CloseBar>
          <TitleBar>
            <Title>
              <Typography noWrap fontSize={18} fontWeight={600}>
                {title}
              </Typography>
            </Title>
            {connerBtn}
          </TitleBar>
        <Divider/>
        </MenuView>
        <BodyView>{children}</BodyView>
        <Footer>
          <PrimaryButton text={buttonText} bdSize='sm' onClick={onClick} />
        </Footer>
      </View>
    </MuiDrawer>
  )
}

const View = styled('div')({
  display: 'block',
  width: '100%',
  minWidth: '400px',
  minHeight: '100vh',
  backgroundColor: 'white',
})

const Conner = styled('div')({
  color: '#EE6E3A',
  backgroundColor: 'white',
  cursor: 'pointer',
})

const MenuView = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  width: 'auto',
  gap: '20px',
  padding: '10px 20px 0 20px'
})

const CloseBar = styled('div')({
  width: '100%',
  height: '20px',
})

const TitleBar = styled('div')({
  width: '100%',
  display: 'flex',
})

const Title = styled('div')({
  width: '100%',
  color: '#3A4248',
  fontWeight: 600,
  fontSize: '18px',
  lineHeight: '20px',
})

const CloseBtn = styled('span')({
  width: '24px',
  height: '24px',
  float: 'right',
  textAlign: 'right',
  cursor: 'pointer',
})

const BodyView = styled('div')({
  display: 'block',
  width: '100%',
  padding: '20px',
  height: 'calc(100vh - 200px)',
  overflow: 'auto',
})

const Footer = styled('div')({
  width: 'auto',
  padding: '20px',
})

export default Drawer
