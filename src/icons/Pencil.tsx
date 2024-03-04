type Props = {
    className? : string
}

const Pencil = (props: Props) => {
    return (
        <svg className={props.className} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.15467 1.98798L11.512 4.34531M10.1547 0.987976C10.4673 0.675374 10.8912 0.499756 11.3333 0.499756C11.7754 0.499756 12.1994 0.675374 12.512 0.987976C12.8246 1.30058 13.0002 1.72456 13.0002 2.16664C13.0002 2.60873 12.8246 3.03271 12.512 3.34531L3.33333 12.524H1V10.1426L10.1547 0.987976Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

export default Pencil