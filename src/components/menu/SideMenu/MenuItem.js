import { List, ListItemButton, ListItemText } from '@mui/material'

const MenuItem = (props) => {
  const { item = {} } = props
  const { title } = item
  return (
    <List component="div" disablePadding>
      <ListItemButton sx={{ pl: 4 }}>
        <ListItemText primary={'' + title} />
      </ListItemButton>
    </List>
  )
}

export default MenuItem