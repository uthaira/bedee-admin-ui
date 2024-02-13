type Props = {
    className? : string
  }
  
  function User( props : Props ) {
      return (
        <svg className={props.className} viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.3571 6.69036C9.98223 6.06523 10.3334 5.21739 10.3334 4.33333C10.3334 3.44928 9.98223 2.60143 9.3571 1.97631C8.73198 1.35119 7.88414 1 7.00008 1C6.11603 1 5.26818 1.35119 4.64306 1.97631C4.01794 2.60143 3.66675 3.44928 3.66675 4.33333C3.66675 5.21739 4.01794 6.06523 4.64306 6.69036C5.26818 7.31548 6.11603 7.66667 7.00008 7.66667C7.88414 7.66667 8.73198 7.31548 9.3571 6.69036Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2.87529 11.8752C3.96925 10.7812 5.45299 10.1667 7.00008 10.1667C8.54718 10.1667 10.0309 10.7812 11.1249 11.8752C12.2188 12.9692 12.8334 14.4529 12.8334 16H1.16675C1.16675 14.4529 1.78133 12.9692 2.87529 11.8752Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
  }
  
  export default User
  

