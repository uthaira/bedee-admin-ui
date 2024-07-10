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

  const { item, visible, activeKey = '', onVisible = () => { } } = props
  const { title, icon, renderLink, link = "", active = "" } = item
  const menus = item.list || []
  const hasSubmenu = menus?.length > 0

  useEffect(() => {
    if (activeKey) {
      item.list?.forEach((submenu: any) => {
        if (submenu.active == activeKey) {
          setOpen(true)
          return
        }
      })
    }
  }, [activeKey])

  const onClick = () => setOpen(!open)
  const onAnchorEl = (event: any) => setAnchorEl(event.currentTarget)
  const onClose = (): void => onClose()

  if (visible) {
    const content = menus.map((it: any, i: number) => {
      return <MenuListItem item={it} key={i} activeKey={activeKey} />
    })
    return (
      <View>
        <ListButton onClick={onClick}
          sx={{
            '&.Mui-selected': {
              backgroundColor: 'rgba(50, 58, 67, 0.20)',
              borderRadius: '8px',
              '&:hover': {
                backgroundColor: 'rgba(50, 58, 67, 0.20)',
              },
            },
            '&:hover': {
              borderRadius: '8px',
            },
            padding: '8px',
          }}
          selected={!hasSubmenu && activeKey === active}
        >
          <Icon>
            {getMenuIcon(icon)}
          </Icon>
          {hasSubmenu ? (
            <ListItemText primary={title} primaryTypographyProps={{ fontSize: 16, fontWeight: 400 }} />
          ) : renderLink ?
            renderLink(<ListItemText primary={title} primaryTypographyProps={{ fontSize: 16, fontWeight: 400 }} />) :
            <Link href={link}>
              <ListItemText primary={title} primaryTypographyProps={{ fontSize: 16, fontWeight: 400 }} />
            </Link>}
          {hasSubmenu && (open ? <ChevronUp /> : <ChevronDown />)}
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
        sx={{
          '&.Mui-selected': {
            backgroundColor: 'rgba(50, 58, 67, 0.20)',
            borderRadius: '8px',
            '&:hover': {
              backgroundColor: 'rgba(50, 58, 67, 0.20)',
            },
          },
          '&:hover': {
            borderRadius: '8px',
          },
          padding: '8px',
        }}
        selected={!hasSubmenu && activeKey === active}
      >
        <CollapseIcon onClick={onVisible}>
          {hasSubmenu ? (
            getMenuIcon(icon)
          ) : renderLink ?
            renderLink(getMenuIcon(icon)) :
            <Link href={link}>
              {getMenuIcon(icon)}
            </Link>}
        </CollapseIcon>
      </ListButton>
      {hasSubmenu && (
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
      )}
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

const Link = styled('a')({
  width: '100%',
  color: 'white',
  textDecoration: 'none',
})

export default GroupMenu