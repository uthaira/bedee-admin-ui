import { 
  styled
} from '@mui/material'

const Header = (props) => {
  return (
    <View>
      <Logo>
        <LogoImg src="./favicon512.png" />
        <BrandName>Bedee</BrandName>
      </Logo>
      <User>
        <Username>AAA@bedee.com</Username>
        <RoleName>Super Admin</RoleName>
      </User>
    </View>
  )
}

const View = styled('div')({
  width: '100%',
  paddingBottom: '16px',
  borderBottom: '1px solid #F3F3F3',
})

const Logo = styled('div')({
  width: '100%',
  fontWeight: 700,
  fontSize: '27px',
  display: 'flex',
})

const LogoImg = styled('img')({
  width: '40px',
  height: '40px',
})

const BrandName = styled('div')({
  width: '100%',
})

const User = styled('div')({
  width: '100%',
  paddingLeft: '10px',
})

const Username = styled('div')({
  width: '100%',
})

const RoleName = styled('div')({
  width: '100%',
  paddingTop: '8px',
  fontWeight: 700,
  color: 'white',
})

export default Header