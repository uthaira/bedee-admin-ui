import { List, ListItemButton, ListItemText, ListItemIcon, styled } from '@mui/material'
import SubIcon from '../../../icons/SubIcon'

const MenuItem = (props: any) => {
  const { item = {}, activeKey = '' } = props
  const { title, link, renderLink } = item

  return (
    <List component="div" disablePadding>
      <StyledListItemButton selected={activeKey === item.active} href={link}>
        <StyledListItemIcon>
          <SubIcon />
        </StyledListItemIcon>
        {renderLink ? (
          renderLink(<ListItemText primary={title} primaryTypographyProps={{ fontSize: 16, fontWeight: 400 }} />)
        ) : (
          <StyledLink href={link}>
            <ListItemText primary={title} primaryTypographyProps={{ fontSize: 16, fontWeight: 400 }} />
          </StyledLink>
        )}
      </StyledListItemButton>
    </List>
  )
}

const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
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
  paddingLeft: theme.spacing(4),
})) as typeof ListItemButton

const StyledListItemIcon = styled(ListItemIcon)({
  minWidth: '5px',
  marginRight: '8px',
  svg: {
    width: '5px',
  },
})

const StyledLink = styled('a')({
  width: '100%',
  color: 'white',
  textDecoration: 'none',
})

export default MenuItem
