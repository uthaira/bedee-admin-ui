import InfoIcon from '../../icons/InfoIcon'
import { default as BaseDialog, DialogProps } from './BaseDialog'

const InfoDialog = ({ confirmText = 'Okay', title = '', subTitle = '', ...props }: DialogProps) => {
  return <BaseDialog {...props} title={title} subTitle={subTitle} confirmText={confirmText} icon={<InfoIcon />} />
}

export default InfoDialog
