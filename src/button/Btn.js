import { default as BaseBtn } from "./BaseBtn"

const Button = (props = {}) => {
  return (
    <BaseBtn {...props } type="seconary" />
  )
}

export default Button
