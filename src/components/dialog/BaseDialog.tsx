import {
  Dialog as MuiDialog,
  DialogTitle as MuiDialogTitle,
  DialogProps as MuiDialogProps,
  DialogActions as MuiDialogActions,
  styled,
  Box,
  Button,
} from '@mui/material'
import React from 'react'
import * as Colors from '../../colors'
import CloseDialog from '../../icons/CloseDialog'

export interface DialogProps extends MuiDialogProps {
  subTitle?: string
  children?: React.ReactNode
  icon?: React.ReactNode
  onConfirm?: () => void
  onCancel?: () => void
  onClose?: () => void
  bdSize?: string
  cancelText?: string
  confirmText?: string
  isCloseIcon?: boolean
}

type Style = {
  width: string
  TitleFontSize: string
}

const Dialog = (props: DialogProps) => {
  const { title, subTitle, children, icon, open, onConfirm, onCancel, onClose, bdSize, cancelText, confirmText, isCloseIcon } =
    props

  const getSize = (): Style => {
    switch (bdSize) {
      case 'xl':
        return {
          TitleFontSize: '31px',
          width: '1140px',
        }
      case 'lg':
        return {
          TitleFontSize: '31px',
          width: '800px',
        }
      case 'md':
        return {
          TitleFontSize: '25px',
          width: '550px',
        }
      case 'sm':
        return {
          TitleFontSize: '18px',
          width: '300px',
        }
      default:
        return {
          TitleFontSize: '18px',
          width: '300px',
        }
    }
  }

  const s = getSize()

  return (
    <DialogStyle open={open} onClose={onClose} {...s}>
      {isCloseIcon && (
        <CloseButtonStyle onClick={onClose}>
          <CloseDialog />
        </CloseButtonStyle>
      )}
      {icon && (
        <Box display="flex" justifyContent="center" paddingY={1.5}>
          {icon}
        </Box>
      )}
      <DialogTitleStyle {...s}>{title}</DialogTitleStyle>
      {children || <DialogSubTitleStyle {...s}>{subTitle}</DialogSubTitleStyle>}
      <DialogActionsStyle>
        {cancelText && (
          <ButtonStyle onClick={onCancel} sx={{ color: Colors.black }}>
            {cancelText}
          </ButtonStyle>
        )}
        {confirmText && <ButtonStyle onClick={onConfirm}>{confirmText}</ButtonStyle>}
      </DialogActionsStyle>
    </DialogStyle>
  )
}

const DialogStyle = styled(MuiDialog)((props: Style) => ({
  '& .MuiPaper-root': {
    width: props.width,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '20px',
    padding: '16px',
    rowGap: '13px',
    boxShadow: 'none',
    backgroundColor: Colors.white,
  },
}))

const DialogTitleStyle = styled(MuiDialogTitle)((props: Style) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: props.TitleFontSize,
  fontWeight: 600,
  padding: '8px 0 0 0',
  lineHeight: '20px',
  textAlign: 'center',
  color: Colors.secondary001,
}))

const DialogSubTitleStyle = styled(MuiDialogTitle)((props: Style) => ({
  fontSize: '16px',
  fontWeight: 400,
  padding: '4px',
  lineHeight: '24px',
  textAlign: 'center',
  color: Colors.gray7,
}))

const DialogActionsStyle = styled(MuiDialogActions)(() => ({
  display: 'flex',
  gap: '40px',
}))

const ButtonStyle = styled(Button)(() => ({
  textTransform: 'none',
}))

const CloseButtonStyle = styled('div')(() => ({
  position: 'absolute',
  top: '16px',
  right: '16px',
  cursor: 'pointer',
}))

export default Dialog
