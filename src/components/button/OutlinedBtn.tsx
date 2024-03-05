import { default as BaseBtn, ButtonProps } from "./BaseBtn"

const OutlinedBtn = (props: ButtonProps) => {
  return (
    <BaseBtn {...props} bdType="outlined" />
  )
}

export default OutlinedBtn
