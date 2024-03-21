import { default as BaseDialog, DialogProps } from './BaseDialog'

const ConfirmChangeDialog = ({
  cancelText = 'Cancel',
  confirmText = 'Confirm',
  title = '',
  subTitle = '',
  ...props
}: DialogProps) => {
  return <BaseDialog {...props} title={title} subTitle={subTitle} cancelText={cancelText} confirmText={confirmText} />
}

export default ConfirmChangeDialog
