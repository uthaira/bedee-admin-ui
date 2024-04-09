interface CheckboxUnCheckedProps {
  fill?: string
}

const CheckboxUnchecked = (props: CheckboxUnCheckedProps) => {
  const { fill = 'white' } = props
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d_2412_25281)">
        <rect x="3" y="2" width="20" height="20" rx="4" fill={fill} />
        <rect x="3.5" y="2.5" width="19" height="19" rx="3.5" stroke="#C3CAD4" />
      </g>
      <defs>
        <filter
          id="filter0_d_2412_25281"
          x="0"
          y="0"
          width="26"
          height="26"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="0.5" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2412_25281" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2412_25281" result="shape" />
        </filter>
      </defs>
    </svg>
  )
}

export default CheckboxUnchecked
