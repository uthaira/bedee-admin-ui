import { useState } from 'react'
import { Meta } from '@storybook/react'
import { Dialog, ConfirmChangeDialog, ConfirmDiscardDialog, InfoDialog, ErrorDialog, Button } from '../../components'
import { Box, Grid } from '@mui/material'

export const SampleDialogTemplate = ({ dialog, confirmChangeDialog, confirmDiscardDialog, infoDialog, errorDialog }: any) => {
  const [dialogStates, setDialogStates] = useState({
    dialog,
    confirmChangeDialog,
    confirmDiscardDialog,
    infoDialog,
    errorDialog,
  })

  const openDialog = (dialogName: string) => {
    setDialogStates((prevState) => ({
      ...prevState,
      [dialogName]: true,
    }))
  }

  const closeDialog = (dialogName: string) => {
    setDialogStates((prevState) => ({
      ...prevState,
      [dialogName]: false,
    }))
  }

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={3} md={3}>
          <Button text="Dialog" bdSize="md" onClick={() => openDialog('dialog')} />
        </Grid>
        <Grid item xs={3} md={3}>
          <Button text="ConfirmChangeDialog" bdSize="md" onClick={() => openDialog('confirmChangeDialog')} />
        </Grid>
        <Grid item xs={3} md={3}>
          <Button text="ConfirmDiscardDialog" bdSize="md" onClick={() => openDialog('confirmDiscardDialog')} />
        </Grid>
        <Grid item xs={3} md={3}>
          <Button text="InfoDialog" bdSize="md" onClick={() => openDialog('infoDialog')} />
        </Grid>
        <Grid item xs={3} md={3}>
          <Button text="ErrorDialog" bdSize="md" onClick={() => openDialog('errorDialog')} />
        </Grid>
      </Grid>
      <Dialog open={dialogStates.dialog} onClose={() => closeDialog('dialog')} isCloseIcon />
      <ConfirmChangeDialog
        open={dialogStates.confirmChangeDialog}
        title="Confirm to publish "
        subTitle="Publish"
        onClose={() => closeDialog('confirmChangeDialog')}
        onConfirm={() => closeDialog('confirmChangeDialog')}
        onCancel={() => closeDialog('confirmChangeDialog')}
      ></ConfirmChangeDialog>
      <ConfirmDiscardDialog
        title="Confirm to discard "
        subTitle="discard"
        open={dialogStates.confirmDiscardDialog}
        onClose={() => closeDialog('confirmDiscardDialog')}
        onConfirm={() => closeDialog('confirmDiscardDialog')}
      />
      <InfoDialog
        title="Info Dialog"
        subTitle="Sub Info Dialog"
        open={dialogStates.infoDialog}
        onClose={() => closeDialog('infoDialog')}
        onConfirm={() => closeDialog('infoDialog')}
      />
      <ErrorDialog
        title="Error Dialog"
        subTitle="Sub Error Dialog"
        open={dialogStates.errorDialog}
        onClose={() => closeDialog('errorDialog')}
        onConfirm={() => closeDialog('errorDialog')}
      />
    </Box>
  )
}

export default {
  title: 'Sample/Dialog',
  component: SampleDialogTemplate,
} as Meta
