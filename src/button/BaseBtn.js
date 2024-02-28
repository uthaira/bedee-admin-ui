import { Button as MuiButton } from "@mui/material"
import { styled } from "@mui/material/styles"

const Color = {
  blue: '#1E6AF6',
  light_red: '#EA5540',
  white: 'white',
}

const Button = (props = {}) => {
  const { type, icon, text, loading, size, width = '100%' } = props

  const getTheme = () => {
    switch (type) {
    case "seconary":
      return {
        color: Color.blue,
        borderColor: Color.blue,
        backgroundColor: Color.white,
      }
    case "outlined":
      return {
        color: Color.blue,
        borderColor: Color.white,
        backgroundColor: Color.white,
      }
    case "remove":
      return {
        color: Color.light_red,
        borderColor: Color.light_red,
        backgroundColor: Color.white,
      }
    default:
      return {
        color: Color.white,
        borderColor: Color.blue,
        backgroundColor: Color.blue,
      }
    }
  }

  const getSize = () => {
    switch (size) {
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
        <div style={{ color: c.color, fontSize: s.fontSize }}>{text}</div>
      </TextStyled>
    </MuiButton>
  );
};

const TextStyled = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minWidth: "70px",
  columnGap: "8px",
  lineHeight: "16px",
}))


const Loading = styled("div")(() => ({
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
