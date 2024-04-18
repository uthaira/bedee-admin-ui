import { Typography } from "@mui/material"
import { Colors } from '../../colors'

type TextType = |
  'h1' |
  'h2' |
  'h3' | 
  'h4' |
  'h5' |
  'h6' |
  'p1' |
  'p2' |
  'lead1' |
  'lead2' |
  'mini' |
  'tiny'

type Style = {
  fontSize: number
  fontWeight: number
}

type StyleDict = {
  [key in TextType]: Style
}

interface BaseTextProps {
  text: string
  bdType: TextType
  color?: string
}

export const BaseText = (props: BaseTextProps) => {
  const { text, bdType, color = Colors.black } = props

  const getTheme = (): Style => {
    const map: StyleDict = {
      h1: {
        fontSize: 61,
        fontWeight: 600
      },
      h2: {
        fontSize: 49,
        fontWeight: 600,
      },
      h3: {
        fontSize: 39,
        fontWeight: 600,
      },
      h4: {
        fontSize: 31,
        fontWeight: 600,
      },
      h5: {
        fontSize: 25,
        fontWeight: 600,
      },
      h6: {
        fontSize: 20,
        fontWeight: 600,
      },
      p1: {
        fontSize: 16,
        fontWeight: 400,
      },
      p2: {
        fontSize: 14,
        fontWeight: 400,
      },
      lead1: {
        fontSize: 16,
        fontWeight: 600,
      },
      lead2: {
        fontSize: 14,
        fontWeight: 600,
      },
      mini: {
        fontSize: 12,
        fontWeight: 400,
      },
      tiny: {
        fontSize: 10,
        fontWeight: 600,
      },
    }

    return map[bdType]
  }

  const getVariant = () => {
    const variantStr = bdType.toString()
    if (variantStr.includes('h')) return variantStr as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

    return 'body1'
  }

  const t = getTheme()
  const v = getVariant()
  
  return <Typography {...t} color={color} variant={v}>{text}</Typography>
}