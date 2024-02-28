import { default as BaseBtn } from "./BaseBtn"

const OutlinedBtn = (props = {}) => {
  return (
    <BaseBtn {...props } type="outlined" />
  )
}

export default OutlinedBtn
