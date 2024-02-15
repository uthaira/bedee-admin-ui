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