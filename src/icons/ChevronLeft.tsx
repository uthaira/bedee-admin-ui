type Props = {
  className? : string
}

function ChevronLeft( props : Props ) {
    return (
      <svg className={props.className} viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.4291 11.1508L1.73926 6.46096L6.4291 1.77112" stroke="currentColor" strokeWidth="1.5461" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
}

export default ChevronLeft
