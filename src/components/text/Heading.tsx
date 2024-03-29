import { BaseText } from "./BaseText"

export interface HeadingProps {
  text: string
  color?: string
}

export const H1 = (props: HeadingProps) => <BaseText {...props} bdType="h1" />

export const H2 = (props: HeadingProps) => <BaseText {...props} bdType="h2" />

export const H3 = (props: HeadingProps) => <BaseText {...props} bdType="h3" />

export const H4 = (props: HeadingProps) => <BaseText {...props} bdType="h4" />

export const H5 = (props: HeadingProps) => <BaseText {...props} bdType="h5" />

export const H6 = (props: HeadingProps) => <BaseText {...props} bdType="h6" />
