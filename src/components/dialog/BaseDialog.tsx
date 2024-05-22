import {
  Dialog as MuiDialog,
  DialogTitle as MuiDialogTitle,
  DialogProps as MuiDialogProps,
  DialogActions as MuiDialogActions,
  DialogTitleProps as MuiDialogTitleProps,
  styled,
  Box,
  Button,
} from '@mui/material'
import React from 'react'
import { Colors } from '../../colors'
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
  width?: string
  titleProps?: MuiDialogTitleProps
  subTitleProps?: MuiDialogTitleProps
}

const Dialog = (props: DialogProps) => {
  const {
    title,
    subTitle,
    children,
    icon,
    onConfirm,
    onCancel,
    onClose,
    cancelText,
    confirmText,
    isCloseIcon,
    fullWidth,
    maxWidth,
    titleProps,
    subTitleProps
  } = props

  return (
    <DialogStyle fullWidth={fullWidth} maxWidth={maxWidth} onClose={onClose} {...props}>
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
      <DialogTitleStyle {...titleProps}>{title}</DialogTitleStyle>
      {children || <DialogSubTitleStyle {...subTitleProps} >{subTitle}</DialogSubTitleStyle>}
      <DialogActionsStyle>
        {cancelText && (
          <ButtonStyle onClick={onCancel} sx={{ color: Colors.gray6 }}>
            {cancelText}
          </ButtonStyle>
        )}
        {confirmText && (
          <ButtonStyle onClick={onConfirm} sx={{ color: Colors.primary001 }}>
            {confirmText}
          </ButtonStyle>
        )}
      </DialogActionsStyle>
    </DialogStyle>
  )
}

const DialogStyle = styled(MuiDialog)((props: any) => ({
  '& .MuiPaper-root': {
    width: props.width || '300px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '20px',
    padding: '16px',
    boxShadow: 'none',
    backgroundColor: Colors.white,
    overflow: 'hidden',
    ...(props.fullWidth && { width: '100%' }),
    ...(props.maxWidth && { maxWidth: props.maxWidth }),
  },
}))

const DialogTitleStyle = styled(MuiDialogTitle)(() => ({
  width: '70%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontWeight: 600,
  padding: '8px 0 0 0',
  lineHeight: '20px',
  textAlign: 'center',
  color: Colors.gray6,
}))

const DialogSubTitleStyle = styled(MuiDialogTitle)(() => ({
  width: '85%',
  fontSize: '16px',
  fontWeight: 400,
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
  fontSize: 15,
}))

const CloseButtonStyle = styled('div')(() => ({
  position: 'absolute',
  top: '20px',
  right: '20px',
  cursor: 'pointer',
}))

export default Dialog
