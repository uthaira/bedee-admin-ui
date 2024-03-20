import { Meta, StoryFn } from '@storybook/react'
import Dialog from './BaseDialog'
import ConfirmChangeDialog from './ConfirmChangeDialog'
import ConfirmDiscardDialog from './ConfirmDiscardDialog'
import InfoDialog from './InfoDialog'
import ErrorDialog from './ErrorDialog'

export default {
  title: 'Components/Dialog',
  component: Dialog,
  argTypes: {
    bdSize: {
      control: { type: 'radio' },
      options: ['sm', 'md', 'lg', 'xl'],
    },
    confirmText: {
      control: 'text',
    },
    cancelText: {
      control: 'text',
    },
  },
} as Meta<typeof Dialog>

const BaseDialogTemplate: StoryFn<typeof Dialog> = (args) => <Dialog {...args} />
export const BaseDialog = BaseDialogTemplate.bind({})
BaseDialog.args = {
  open: true,
  isCloseIcon: false,
  bdSize: 'sm',
  title: 'Tittle Modal',
  subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
}

const ConfirmChangeDialogTemplate: StoryFn<typeof ConfirmChangeDialog> = (args) => <ConfirmChangeDialog {...args} />
export const ConfirmChangeDialogs = ConfirmChangeDialogTemplate.bind({})
ConfirmChangeDialogs.args = {
  open: true,
  isCloseIcon: false,
  bdSize: 'sm',
  confirmText: 'Confirm',
  cancelText: 'Cancel',
  title: 'Tittle Modal',
  subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
}

const ConfirmDiscardDialogTemplate: StoryFn<typeof ConfirmDiscardDialog> = (args) => <ConfirmDiscardDialog {...args} />
export const ConfirmDiscardDialogs = ConfirmDiscardDialogTemplate.bind({})
ConfirmDiscardDialogs.args = {
  open: true,
  isCloseIcon: false,
  bdSize: 'sm',
  confirmText: 'Discard Changes',
  title: 'Tittle Modal',
  subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
}

const InfoDialogTemplate: StoryFn<typeof InfoDialog> = (args) => <InfoDialog {...args} />
export const InfoDialogs = InfoDialogTemplate.bind({})
InfoDialogs.args = {
  open: true,
  isCloseIcon: false,
  bdSize: 'sm',
  confirmText: 'Okay',
  title: 'Tittle Modal',
  subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
}

const ErrorDialogTemplate: StoryFn<typeof ErrorDialog> = (args) => <ErrorDialog {...args} />
export const ErrorDialogs = ErrorDialogTemplate.bind({})
ErrorDialogs.args = {
  open: true,
  isCloseIcon: false,
  bdSize: 'sm',
  confirmText: 'Try again',
  title: 'Tittle Modal',
  subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
}
