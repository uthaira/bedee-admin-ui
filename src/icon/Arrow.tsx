import React from 'react'

type Props = {
    className? : string
}

const Arrow = (props: Props) => {
    return (
        <svg className={props.className} width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.78564 7L0.785645 4L3.78565 1" stroke="#07236D" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7.21436 7L4.21436 4L7.21436 1" stroke="#455FA5" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    )
}

export default Arrow