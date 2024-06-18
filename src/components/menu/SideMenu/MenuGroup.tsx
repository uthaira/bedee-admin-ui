import { useEffect, useState } from 'react'
import {
  styled,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  Collapse
} from '@mui/material'

import ChevronDown from '../../../icons/ChevronDown'
import ChevronUp from '../../../icons/ChevronUp'
import MenuListItem from './MenuListItem'
import MenuPopupItem from './MenuPopupItem'
import { getMenuIcon } from '../../../utils/menu'

const GroupMenu = (props: any) => {
  const [open, setOpen] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)

  const isOpenPopup = Boolean(anchorEl)

  const { item, visible, activeKey = '', onVisible = () => {} } = props
  const { title, icon } = item
  const menus = item.list || []

  useEffect(() => {
    if(activeKey){
      item.list.forEach((submenu: any) => {
        if(submenu.active == activeKey){
          setOpen(true)
          return
        }
      })
    }
  },[activeKey])

  const onClick = () => setOpen(!open)
  const onAnchorEl = (event: any) => setAnchorEl(event.currentTarget)
  const onClose = (): void => onClose()

  if (visible) {
    const content = menus.map((it: any, i: number) => {
      return <MenuListItem item={it} key={i} activeKey={activeKey} />
    })
    return (
      <View>
        <ListButton onClick={onClick}>
          <Icon>
            {getMenuIcon(icon)}
          </Icon>
          <ListItemText primary={title}  primaryTypographyProps={{ fontSize: 16,fontWeight: 400 }} />
          {open ? <ChevronUp /> :   <ChevronDown /> }
        </ListButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          {content}
        </Collapse>
      </View>
    )
  }

  const content = menus.map((it: any, i: number) => {
    return <MenuPopupItem item={it} onClose={onClose} key={i} />
  })
  return (
    <View>
      <ListButton
        onClick={onAnchorEl}
        aria-controls={isOpenPopup ? title : undefined}
        aria-haspopup="true"
        aria-expanded={isOpenPopup ? 'true' : undefined}
      >
        <CollapseIcon onClick={onVisible}>
          {getMenuIcon(icon)}
        </CollapseIcon>
      </ListButton>
      <Menu
        onClick={() => setAnchorEl(null)}
        id={title}
        anchorEl={anchorEl}
        open={isOpenPopup}
        onClose={onClose}
        MenuListProps={{
          'aria-labelledby': title,
        }}
        hideBackdrop
      >
        {content}
      </Menu>
    </View>
  )
}

const View = styled('div')({
  width: '100%',
  'svg': {
    width: '24px',
    height: '24px',
  }
})

const ListButton = styled(ListItemButton)({
  width: '100%',
  padding: '8px 0px',
  '&:hover, &:focus, &:active': {
    textDecoration: 'none',
    backgroundColor: 'transparent',
    borderRadius: '8px',
  },
})

const Icon = styled(ListItemIcon)({
  minWidth: '40px',
})

const CollapseIcon = styled(ListItemIcon)({
  minWidth: '0',
  margin: '0 auto',
  textAlign: 'center',
  'svg': {
    width: '24px',
    height: '24px',
  }
})

export default GroupMenu