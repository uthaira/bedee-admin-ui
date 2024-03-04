type Props = {
    className? : string
}

const Note = (props: Props) => {
    return (
        <svg className={props.className} width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.83325 10.5H6.91659M2.83325 3.5H12.1666H2.83325ZM2.83325 7H12.1666H2.83325Z" stroke="#4A5568" strokeWidth="1.27284" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

export default Note