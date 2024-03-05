

type Props = {
    className : string 
  }
  
  function CloseDialog( props : Props ) {
      return (
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1L13 13M1 13L13 1L1 13Z" stroke="#3A4248" strokeWidth="1.28" strokeLinecap="round" strokeLinejoin="round" />
        </svg> 
      )
  }
 
export default CloseDialog
 
