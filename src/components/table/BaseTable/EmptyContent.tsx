import { styled } from "@mui/material"
import { Lead1 } from "../../text"

const EmptyContent = () => {
  return (
    <Container>
      <Lead1 text="Empty" />
    </Container>
  )
}

export default EmptyContent

const Container = styled("div")({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '32px',
})
