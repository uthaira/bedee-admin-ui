type Props = {
  width?: string
  height?: string
}

const UploadFileIcon = (props: Props) => {
  const { width, height } = props
  return (
    <svg width={width || '48'} height={height || '65'} viewBox="0 0 48 65" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_22472_110881)">
        <path
          d="M28.9446 0H4.54945C2.03691 0 0 1.94499 0 4.34414V60.6576C0 63.0567 2.03691 65.0017 4.54945 65.0017H43.4506C45.9631 65.0017 48 63.0567 48 60.6576V18.1954L28.9446 0Z"
          fill="url(#paint0_linear_22472_110881)"
        />
        <g clipPath="url(#clip1_22472_110881)">
          <g style={{ mixBlendMode: 'multiply' }}>
            <path
              d="M23.7212 23.6362L15.4709 31.9103L19.9176 31.9103L19.9176 46.2877L27.5249 46.2878L27.5249 31.9103L31.9733 31.9103L23.7212 23.6362Z"
              fill="#A5C3FB"
            />
          </g>
        </g>
        <g style={{ mixBlendMode: 'multiply' }}>
          <path d="M28.9446 13.8513C28.9446 16.2504 30.9815 18.1954 33.494 18.1954H47.9999L28.9446 0V13.8513Z" fill="#A5C3FB" />
        </g>
      </g>
      <defs>
        <linearGradient id="paint0_linear_22472_110881" x1="19.5" y1="8" x2="48.7458" y2="69.8446" gradientUnits="userSpaceOnUse">
          <stop stopColor="#DCE7FC" />
          <stop offset="1" stopColor="#73A4EF" />
        </linearGradient>
        <clipPath id="clip0_22472_110881">
          <rect width="48" height="65" fill="white" />
        </clipPath>
        <clipPath id="clip1_22472_110881">
          <rect width="16.5023" height="22.6515" fill="white" transform="translate(31.9731 46.2878) rotate(180)" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default UploadFileIcon
