import { Avatar, ListItemText, styled } from '@mui/material'

import BedeeLogo from '../../../icons/BedeeLogo'
import { getAvartarName } from '../../../utils/menu'

const Header = (props: any) => {
  const { visible, username, role, onVisible } = props

  const style = visible ? {} : { display: 'none' }
  const logo = visible ? {} : { width: '24px', height: '24px' }
  const avartar = visible ? {} : { width: '24px', height: '24px' }
  return (
    <View>
      <LogoSection onClick={onVisible}>
        <Logo style={logo}>
          <BedeeLogo />
        </Logo>
        <BrandName style={style}>Bedee</BrandName>
      </LogoSection>
      <UserSection>
      <Avatar style={avartar} sx={{ bgcolor: '#E5F3FF', color: '#0085FF',border: '1px solid #CCE7FF' }}>{getAvartarName(username)}</Avatar>
        {visible && (
          <User>
            <ListItemText  primaryTypographyProps={{ fontSize: 14, fontWeight: 500  }} >{username}</ListItemText>
            <ListItemText  primaryTypographyProps={{ fontSize: 16, fontWeight: 700  }} >{role}</ListItemText>
          </User>
        )}
      </UserSection>
    </View>
  )
}


const View = styled('div')({
  // width: '100%',
  borderBottom: '1px solid #CDE7F6',
  paddingTop: '24px',
  paddingBottom: '12px',
  paddingLeft: '8px',
  paddingRight: '8px',
})

const LogoSection = styled('div')({
  width: '100%',
  fontWeight: 700,
  fontSize: '27px',
  display: 'flex',
  alignItems: 'center',
  columnGap: '8px',
  cursor: 'pointer',
  marginBottom: '8px',
})

const UserSection = styled('div')({
  width: '100%',
  fontWeight: 700,
  fontSize: '27px',
  display: 'flex',
  alignItems: 'center',
  columnGap: '8px',
  cursor: 'pointer',
  marginBottom: '8px',
})

const Logo = styled('div')({
  width: '35px',
  height: '35px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '10px',
  backgroundColor: 'white',
})

const BrandName = styled('div')({
  width: '75%',
})

const User = styled('div')({
  width: '100%',
})


export default Header