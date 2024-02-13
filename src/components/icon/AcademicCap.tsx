type Props = {
    className? : string
}

const AcademicCap = (props: Props) => {
    return (
        <svg className={props.className} viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 9.16671L16.5 5.00004L9 0.833374L1.5 5.00004L9 9.16671ZM9 9.16671L14.1333 6.31504C14.8088 8.03011 15.0005 9.89769 14.6875 11.7142C12.5738 11.9194 10.581 12.7947 9 14.2125C7.41921 12.7949 5.42674 11.9195 3.31333 11.7142C3.00017 9.89769 3.19186 8.03006 3.8675 6.31504L9 9.16671ZM5.66667 14.1667V7.91671L9 6.06504" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

export default AcademicCap