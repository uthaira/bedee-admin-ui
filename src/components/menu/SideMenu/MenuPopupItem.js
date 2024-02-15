import { styled, MenuItem } from '@mui/material'

const MenuPopupItem = (props) => {
  const { item = {} } = props
  const { title, link } = item
  return (
    <MenuItem>
      <Link href={link}>{title}</Link>
    </MenuItem>
  )
}

const Link = styled('a')({
  width: '100%',
  color: '#1E6AF6',
  textDecoration: 'none',
})

export default MenuPopupItem