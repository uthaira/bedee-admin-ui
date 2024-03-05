import { default as BaseBtn, ButtonProps } from "./BaseBtn"
import Remove from '../../icons/Remove'

const RemoveBtn = (props: ButtonProps) => {
  return (
    <BaseBtn {...props} icon={<Remove />} bdType="remove" />
  )
}

export default RemoveBtn
