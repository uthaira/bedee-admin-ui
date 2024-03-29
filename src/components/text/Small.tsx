import { BaseText } from "./BaseText"

export interface SmallProps {
  text: string
  color?: string
}

export const Mini = (props: SmallProps) => <BaseText {...props} bdType="mini" />

export const Tiny = (props: SmallProps) => <BaseText {...props} bdType="tiny" />