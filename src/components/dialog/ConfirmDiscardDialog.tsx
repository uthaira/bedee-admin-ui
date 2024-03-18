import { default as BaseDialog, DialogProps } from './BaseDialog'

const ConfirmDiscardDialog = ({
  confirmText = 'Discard changes',
  title = 'Title',
  subTitle = 'This is subTitle',
  ...props
}: DialogProps) => {
  return <BaseDialog {...props} title={title} subTitle={subTitle} confirmText={confirmText}/>
}

export default ConfirmDiscardDialog
