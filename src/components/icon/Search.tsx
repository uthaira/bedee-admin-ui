type Props = {
  className : string
}

function SearchIcon(props : Props) {
    return (
      <svg className={props.className} width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.7059 15.6597L10.9328 10.8866M12.5238 6.90896C12.5238 7.64025 12.3798 8.36438 12.0999 9.04C11.8201 9.71562 11.4099 10.3295 10.8928 10.8466C10.3757 11.3637 9.76179 11.7739 9.08617 12.0537C8.41055 12.3336 7.68643 12.4776 6.95514 12.4776C6.22385 12.4776 5.49972 12.3336 4.8241 12.0537C4.14848 11.7739 3.5346 11.3637 3.0175 10.8466C2.5004 10.3295 2.09022 9.71562 1.81036 9.04C1.53051 8.36438 1.38647 7.64025 1.38647 6.90896C1.38647 5.43206 1.97317 4.01565 3.0175 2.97133C4.06183 1.927 5.47824 1.3403 6.95514 1.3403C8.43204 1.3403 9.84845 1.927 10.8928 2.97133C11.9371 4.01565 12.5238 5.43206 12.5238 6.90896Z" stroke="currentColor" strokeWidth="1.27284" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
}

export default SearchIcon
