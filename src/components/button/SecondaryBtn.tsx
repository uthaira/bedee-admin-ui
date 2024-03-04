import { default as BaseBtn, ButtonProps } from "./BaseBtn"

const SecondaryBtn = (props: ButtonProps) => {
  return (
    <BaseBtn {...props} bdType="secondary" />
  )
}

export default SecondaryBtn
