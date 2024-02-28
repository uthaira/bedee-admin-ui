import { default as BaseBtn } from "./BaseBtn"
import Remove from '../icon/Remove'

const RemoveBtn = (props) => {
  return (
    <BaseBtn {...props } icon={<Remove />} type="remove" />
  )
}

export default RemoveBtn
