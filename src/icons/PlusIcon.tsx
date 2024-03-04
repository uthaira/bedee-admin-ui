type Props = {
    className? : string
  }

const PlusIcon = (props: Props) => {
    return (
        <svg className={props.className} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 1V7M7 7V13M7 7H13M7 7H1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

export default PlusIcon