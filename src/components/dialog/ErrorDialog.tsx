import ErrorIcon from '../../icons/ErrorIcon'
import { default as BaseDialog, DialogProps } from './BaseDialog'

const ErrorDialog = ({ confirmText = 'Try again', title = 'Title', subTitle = 'This is subTitle', ...props }: DialogProps) => {
  return <BaseDialog {...props} title={title} subTitle={subTitle} confirmText={confirmText} icon={<ErrorIcon />} />
}

export default ErrorDialog
