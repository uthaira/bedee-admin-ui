import DashboardIcon from '../icons/DasboardIcon'
import Marketing from '../icons/Marketing'
import CustomerIcon from '../icons/CustomerIcon'
import ProviderIcon from '../icons/ProviderIcon'
import Lab from '../icons/Lab'
import Admin from '../icons/Admin'
import Setting from '../icons/Setting'
import ChartPie from '../icons/ChartPie'
import ShoppingCart from '../icons/ShoppingCart'
import ClipboardList from '../icons/ClipboardList'
import SurveyIcon from '../icons/SurveyIcon'
import InsuranceIcon from '../icons/InsuranceIcon'

export const getMenuIcon = (keyIcon: string) => {
  switch (keyIcon) {
    case 'ScienceOutlinedIcon':
      return <DashboardIcon />
    case 'DashboardIcon':
      return <DashboardIcon />
    case 'CustomerIcon':
      return <CustomerIcon />
    case 'ProviderIcon':
      return <ProviderIcon />
    case 'Setting':
      return <Setting />
    case 'ChartPie':
      return <ChartPie />
    case 'ShoppingCart':
      return <ShoppingCart />
    case 'Admin':
      return <Admin />
    case 'Marketing':
      return <Marketing />
    case 'ClipboardList':
      return <ClipboardList />
    case 'Lab':
      return <Lab />
    case 'SurveyIcon':
      return <SurveyIcon />
    case 'InsuranceIcon':
      return <InsuranceIcon />
    default:
      return ''
  }
}

export const getAvartarName = (email: string) => {
  if (!email) return ''
  const username = email.split('@')[0]
  const parts = username.split('.')
  let result = parts.map((part) => part[0]).join('')
  return result.slice(0, 2).toUpperCase()
}
