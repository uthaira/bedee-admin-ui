import { Box, Button as MuiButton, ButtonProps as MuiButtonProps } from "@mui/material"
import { styled } from "@mui/material/styles"
import * as colors from "../../colors"

export interface ButtonProps extends MuiButtonProps {
  bdType?: "primary" | "secondary" | "outlined" | "remove"
  bdSize?: string

  icon?: JSX.Element
  text?: string
  loading?: boolean
  width?: string
}

const Button = (props: ButtonProps) => {
  const { bdType, icon, text, loading, bdSize, width = '100%' } = props

  const getTheme = () => {
    switch (bdType) {
      case "secondary":
        return {
          color: colors.primary001,
          borderColor: colors.primary001,
          backgroundColor: colors.white,
        }
      case "outlined":
        return {
          color: colors.primary001,
          borderColor: colors.white,
          backgroundColor: colors.white,
        }
      case "remove":
        return {
          color: colors.error,
          borderColor: colors.error,
          backgroundColor: colors.white,
        }
      default:
        return {
          color: colors.white,
          borderColor: colors.primary001,
          backgroundColor: colors.primary001,
        }
    }
  }

  const getSize = () => {
    switch (bdSize) {
      case "lg":
        return {
          borderRadius: "32px",
          fontSize: "16px",
          height: "52px",
          icon: 12,
          loading: "18px"
        }
      case "md":
        return {
          borderRadius: "32px",
          fontSize: "16px",
          height: "48px",
          icon: 12,
          loading: "16px"
        }
      case "sm":
        return {
          borderRadius: "32px",
          fontSize: "14px",
          height: "40px",
          icon: 12,
          loading: "14px"
        }
      default:
        return {
          borderRadius: "32px",
          fontSize: "12px",
          height: "30px",
          icon: 16,
          loading: "12px"
        }
    }
  }

  const c = getTheme()
  const s = getSize()
  const iconStyle = {
    width: s.loading,
    height: s.loading,
    border: `2px solid ${c.color}`,
    borderBottomColor: c.backgroundColor,
  }
  const iconImg = loading ? <Loading style={iconStyle} /> : icon

  return (
    <MuiButton
      sx={{
        borderRadius: s.borderRadius,
        fontSize: s.fontSize,
        paddingY: "8px",
        borderColor: c.borderColor,
        backgroundColor: c.backgroundColor,
        width,
        height: s.height,
        "&.MuiButton-outlined": {
          color: c.color,
          backgroundColor: c.backgroundColor,
        },
        "&:hover": {
          borderColor: c.borderColor,
        },
        "&.Mui-disabled": {
          color: c.color,
          backgroundColor: c.backgroundColor,
          opacity: 0.6,
        },
      }}
      variant="outlined"
      {...props}
    >
      <TextStyled>
        {iconImg}
        <Box style={{ color: c.color, fontSize: s.fontSize }}>{text}</Box>
      </TextStyled>
    </MuiButton>
  );
};

const TextStyled = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minWidth: "70px",
  columnGap: "8px",
  lineHeight: "16px",
  textTransform: 'none',
}))


const Loading = styled(Box)(() => ({
  borderRadius: '50%',
  display: 'inline-block',
  boxSizing: 'border-box',
  animation: 'rotation 1s linear infinite',

  '@keyframes rotation': {
    '0%': {
      transform: 'rotate(0deg)',
    },
    '100%': {
      transform: 'rotate(360deg)',
    }
  }
}))

export default Button
