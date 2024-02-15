import { styled } from '@mui/material'

import BedeeLogo from '../../icon/BedeeLogo'

const Header = (props) => {
  const { visible, username, role, onVisible } = props

  const style = visible ? {} : { display: 'none' }
  return (
    <View>
      <LogoSection onClick={onVisible}>
        <BedeeLogo />
        <BrandName style={style}>Bedee</BrandName>
      </LogoSection>
      <User style={style}>
        <Username>{username || ''}</Username>
        <RoleName>{role || ''}</RoleName>
      </User>
    </View>
  )
}


const View = styled('div')({
  width: '100%',
  paddingBottom: '24px',
  borderBottom: '1px solid #CDE7F6',
})

const LogoSection = styled('div')({
  width: '100%',
  fontWeight: 700,
  fontSize: '27px',
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',

  'svg': {
    width: '65px',
    height: '65px',
  }
})

const BrandName = styled('div')({
  width: '75%',
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