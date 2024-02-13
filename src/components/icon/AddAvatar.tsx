type Props = {
    className? : string
}
  
function AddAvatar( props : Props ) {
    return (
        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.5 7V10V7ZM16.5 10V13V10ZM16.5 10H19.5H16.5ZM16.5 10H13.5H16.5ZM11.5 5C11.5 6.06087 11.0786 7.07828 10.3284 7.82843C9.57828 8.57857 8.56087 9 7.5 9C6.43913 9 5.42172 8.57857 4.67157 7.82843C3.92143 7.07828 3.5 6.06087 3.5 5C3.5 3.93913 3.92143 2.92172 4.67157 2.17157C5.42172 1.42143 6.43913 1 7.5 1C8.56087 1 9.57828 1.42143 10.3284 2.17157C11.0786 2.92172 11.5 3.93913 11.5 5V5ZM1.5 18C1.5 16.4087 2.13214 14.8826 3.25736 13.7574C4.38258 12.6321 5.9087 12 7.5 12C9.0913 12 10.6174 12.6321 11.7426 13.7574C12.8679 14.8826 13.5 16.4087 13.5 18V19H1.5V18Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

export default AddAvatar