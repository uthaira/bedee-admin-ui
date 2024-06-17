import { styled, List, ListItemButton, ListItemText, ListItemIcon } from '@mui/material'
import SubIcon from '../../../icons/SubIcon'

const MenuItem = (props: any) => {
  const { item = {} , activeKey = ''} = props
  const { title, link } = item
  return (
    <List component="div" disablePadding>
      <ListItemButton    
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
          pl: 4,
        }} 
        selected={activeKey === item.active}>
      <Icon>
        <SubIcon />
        </Icon>
      <Link href={link}>
      <ListItemText primary={title} primaryTypographyProps={{ fontSize: 16,fontWeight: 400 }}/></Link>
    </ListItemButton>
    </List>
  )
}

const Link = styled('a')({
  width: '100%',
  color: 'white',
  textDecoration: 'none',
})

const Icon = styled(ListItemIcon)({
  minWidth: '5px',
  marginRight: '8px',
  'svg' : {
    width: '5px',
  }
})


export default MenuItem