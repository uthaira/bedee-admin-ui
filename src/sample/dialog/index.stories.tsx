import { useEffect, useState } from 'react'
import { Meta } from '@storybook/react'
import { Dialog } from '../../components'
import ConfirmChangeDialog from '../../components/dialog/ConfirmChangeDialog'
import ConfirmDiscardDialog from '../../components/dialog/ConfirmDiscardDialog'
import InfoDialog from '../../components/dialog/InfoDialog'
import ErrorDialog from '../../components/dialog/ErrorDialog'

export const SampleDialogTemplate = ({ dialog, confirmChangeDialog, confirmDiscardDialog, infoDialog, errorDialog }: any) => {
  const [dialogStates, setDialogStates] = useState({
    dialog,
    confirmChangeDialog,
    confirmDiscardDialog,
    infoDialog,
    errorDialog,
  })

  useEffect(() => {
    setDialogStates({
      dialog,
      confirmChangeDialog,
      confirmDiscardDialog,
      infoDialog,
      errorDialog,
    })
  }, [dialog, confirmChangeDialog, confirmDiscardDialog, infoDialog, errorDialog])

  return (
    <>
      <Dialog open={dialogStates.dialog} />
      <ConfirmChangeDialog open={dialogStates.confirmChangeDialog} />
      <ConfirmDiscardDialog open={dialogStates.confirmDiscardDialog} />
      <InfoDialog open={dialogStates.infoDialog} />
      <ErrorDialog open={dialogStates.errorDialog} />
    </>
  )
}

export default {
  title: 'Sample/Dialog',
  component: SampleDialogTemplate,
  argTypes: {
    dialog: {
      control: 'boolean',
    },
    confirmChangeDialog: {
      control: 'boolean',
    },
    confirmDiscardDialog: {
      control: 'boolean',
    },
    infoDialog: {
      control: 'boolean',
    },
    errorDialog: {
      control: 'boolean',
    },
  },
} as Meta
