import { useState } from 'react'
import { 
  styled,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse
} from '@mui/material'

import ChevronDown from '../../icon/ChevronDown'
import ChevronUp from '../../icon/ChevronUp'
import MenuItem from './MenuItem'

const GroupMenu = (props) => {
  const [open, setOpen] = useState(false)

  const { item } = props
  const { title, icon } = item
  const menus = item.list || [] 
  const content = menus.map((it, i) => {
    return <MenuItem item={it} key={i} />
  })

  const onClick = () => setOpen(!open)

  return (
    <View>
      <ListItemButton onClick={onClick}>
        <ListItemIcon>
          {icon}
        </ListItemIcon>
        <ListItemText primary={title} />
        {open ? <ChevronDown /> : <ChevronUp />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {content}
      </Collapse>
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

const Title = styled('div')({
  width: '100%'
})

const SubMenuView = styled('div')({
  width: '100%'
})

export default GroupMenu