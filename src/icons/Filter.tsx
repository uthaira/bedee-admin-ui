type Props = {
  className ?: string
}

function Filter( props : Props ) {
    return (
      <svg className={props?.className} width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.44845 14.3116H5.13962V7.51376L0.423828 1.89973V0.837891H13.2238V1.89367L8.7326 7.5077V12.0274L6.44845 14.3116ZM6.03786 13.4133H6.0764L7.83435 11.6554V7.19264L12.1995 1.73614H1.45962L6.03786 7.18658V13.4133Z" fill="#1E6AF6"/>
      </svg>
    )
}

export default Filter
