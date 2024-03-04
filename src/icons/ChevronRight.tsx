type Props = {
  className? : string
}

function ChevronRight( props : Props ) {
    return (
      <svg className={props.className} width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.31323 1.77124L6.00308 6.46108L1.31323 11.1509" stroke="currentColor" strokeWidth="1.5461" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
}

export default ChevronRight
