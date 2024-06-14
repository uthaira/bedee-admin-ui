
import DasboardIcon from "../icons/DasboardIcon"
import ReportIcon from "../icons/ReportIcon"
import Fullfill from "../icons/Fullfill"
import Marketing from "../icons/Marketing"
import CustomerIcon from "../icons/CustomerIcon"
import ProviderIcon from "../icons/ProviderIcon"
import Lab from "../icons/Lab"
import Admin from "../icons/Admin"
import Setting from "../icons/Setting"
import ChartPie from "../icons/ChartPie"
import ShoppingCart from "../icons/ShoppingCart"
import ClipboardList from "../icons/ClipboardList"

export const getMenuIcon = (keyIcon: string) => {
    switch (keyIcon) {
      case 'ScienceOutlinedIcon':
        return <DasboardIcon />
      case 'DasboardIcon':
        return <DasboardIcon />
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
      default:
        return '' 
    }
  }

export const getAvartarName = (email: string) => {
    if (!email) return '';
    const username = email.split('@')[0];
    const parts = username.split('.');
    let result = parts.map(part => part[0]).join('');
    return result.slice(0, 2).toUpperCase();
}