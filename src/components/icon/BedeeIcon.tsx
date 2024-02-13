import React from 'react'
import Avatar from '@mui/material/Avatar';
import { Box } from '@mui/system';

type Props = {}

const BedeeIcon = (props: Props) => {
    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'White',
            height: '40px',
            width: '40px',
            boxShadow: '0px 4.33333px 17.3333px rgba(29, 22, 23, 0.07)',
            borderRadius: '13.9997px'
        }}>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_1455_19446)">
                    <path d="M8.47217 17.4893H23.0649V32.0798H11.2098C10.8504 32.0801 10.4944 32.0096 10.1623 31.8722C9.83018 31.7349 9.52839 31.5335 9.27415 31.2794C9.01991 31.0254 8.81821 30.7237 8.6806 30.3917C8.543 30.0597 8.47217 29.7038 8.47217 29.3444V17.4893Z" fill="#081288" />
                    <path d="M8.47325 17.4895V14.793C8.45657 13.8243 8.63299 12.8619 8.99217 11.9621C9.35136 11.0622 9.88613 10.2429 10.5653 9.55192C11.2445 8.86093 12.0545 8.31212 12.948 7.93749C13.8416 7.56286 14.8007 7.36992 15.7696 7.36992C16.7385 7.36992 17.6977 7.56286 18.5913 7.93749C19.4848 8.31212 20.2948 8.86093 20.9739 9.55192C21.6531 10.2429 22.1879 11.0622 22.5471 11.9621C22.9063 12.8619 23.0827 13.8243 23.066 14.793V17.4895H8.47325Z" fill="#007AFF" />
                    <path d="M23.0786 17.4893H25.7621C27.697 17.4893 29.5526 18.2579 30.9207 19.626C32.2888 20.9941 33.0574 22.8497 33.0574 24.7846C33.0574 26.7194 32.2888 28.575 30.9207 29.9431C29.5526 31.3112 27.697 32.0798 25.7621 32.0798H23.0786V17.4893Z" fill="#FF3500" />
                </g>
                <defs>
                    <filter id="filter0_d_1455_19446" x="2.22217" y="5.28659" width="37.0854" height="37.2099" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="4.16667" />
                        <feGaussianBlur stdDeviation="3.125" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0.00392157 0 0 0 0 0.313882 0 0 0 0 0.6 0 0 0 0.2 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1455_19446" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1455_19446" result="shape" />
                    </filter>
                </defs>
            </svg>
        </Box>
    )
}

export default BedeeIcon