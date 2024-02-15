import { useState } from 'react'
import { 
  styled,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  Collapse
} from '@mui/material'

import ChevronDown from '../../icon/ChevronDown'
import ChevronUp from '../../icon/ChevronUp'
import MenuListItem from './MenuListItem'
import MenuPopupItem from './MenuPopupItem'

const GroupMenu = (props) => {
  const [open, setOpen] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)
  
  const isOpenPopup = Boolean(anchorEl)

  const { item, visible } = props
  const { title, icon } = item
  const menus = item.list || [] 

  const onClick = () => setOpen(!open)
  const onAnchorEl = (event) => setAnchorEl(event.currentTarget)
  const onClose = () => onClose()

  if (visible) {
    const content = menus.map((it, i) => {
      return <MenuListItem item={it} key={i} />
    })
    return (
      <View>
        <ListButton onClick={onClick}>
          <Icon>
            {icon}
          </Icon>
          <ListItemText primary={title} />
          {open ? <ChevronDown /> : <ChevronUp />}
        </ListButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          {content}
        </Collapse>
      </View>
    )
  }

  const content = menus.map((it, i) => {
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
        <Icon>
          {icon}
        </Icon>
      </ListButton>
      <Menu
        id={title}
        anchorEl={anchorEl}
        open={isOpenPopup}
        onClose={onClose}
        MenuListProps={{
          'aria-labelledby': title,
        }}
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
})

const Icon = styled(ListItemIcon)({
  minWidth: '40px',
})

export default GroupMenu