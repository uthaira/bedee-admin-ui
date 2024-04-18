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
}

type Style = {
  width: string
  TitleFontSize: string
}

const Dialog = (props: DialogProps) => {
  const {
    title,
    subTitle,
    children,
    icon,
    open,
    onConfirm,
    onCancel,
    onClose,
    bdSize,
    cancelText,
    confirmText,
    isCloseIcon,
    width,
  } = props

  const getSize = (): Style => {
    switch (bdSize) {
      case 'xl':
        return {
          TitleFontSize: '31px',
          width: width || '1140px',
        }
      case 'lg':
        return {
          TitleFontSize: '31px',
          width: width || '800px',
        }
      case 'md':
        return {
          TitleFontSize: '25px',
          width: width || '550px',
        }
      case 'sm':
        return {
          TitleFontSize: '18px',
          width: width || '300px',
        }
      default:
        return {
          TitleFontSize: '18px',
          width: width || '300px',
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

const DialogStyle = styled(MuiDialog)((props: Style) => ({
  '& .MuiPaper-root': {
    width: props.width,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '20px',
    padding: '16px',
    boxShadow: 'none',
    backgroundColor: Colors.white,
    overflow: 'hidden',
  },
}))

const DialogTitleStyle = styled(MuiDialogTitle)((props: Style) => ({
  width: '70%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: props.TitleFontSize,
  fontWeight: 600,
  padding: '8px 0 0 0',
  lineHeight: '20px',
  textAlign: 'center',
  color: Colors.gray6,
}))

const DialogSubTitleStyle = styled(MuiDialogTitle)((props: Style) => ({
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
  fontSize: 15
}))

const CloseButtonStyle = styled('div')(() => ({
  position: 'absolute',
  top: '16px',
  right: '16px',
  cursor: 'pointer',
}))

export default Dialog
