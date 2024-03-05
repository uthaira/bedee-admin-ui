import { styled, List, ListItemButton } from '@mui/material'

const MenuItem = (props: any) => {
  const { item = {} } = props
  const { title, link } = item
  return (
    <List component="div" disablePadding>
      <ListItemButton sx={{ pl: 4 }}>
        <Link href={link}>{title}</Link>
      </ListItemButton>
    </List>
  )
}

const Link = styled('a')({
  width: '100%',
  color: 'white',
  textDecoration: 'none',
})

export default MenuItem