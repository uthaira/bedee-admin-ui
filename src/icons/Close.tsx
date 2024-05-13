interface CloseProps {
  className?: string
  width?: string
  height?: string
  color?: string
}

function Close(props: CloseProps) {
  return (
    <svg
      className={props.className}
      width={props.width || '13'}
      height={props.height || '13'}
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.77539 1.0752L11.9263 11.2261M1.77539 11.2261L11.9263 1.0752L1.77539 11.2261Z"
        stroke={props.color || '#3A4248'}
        strokeWidth="1.69181"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Close
