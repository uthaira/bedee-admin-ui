type Props = {
  className: string;
};

function WarningIcon(props: Props) {
  return (
    <svg
      width="49"
      height="39"
      viewBox="0 0 49 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M42.588 37.2538H11.412C7.94701 37.2538 5.78251 33.5031 7.51501 30.5038L23.103 3.50383C24.8355 0.504582 29.1645 0.504582 30.897 3.50383L46.485 30.5038C48.2175 33.5031 46.053 37.2538 42.588 37.2538Z"
        fill="#EFB110"
      />
      <path
        d="M27 13.2538V21.5038M27 28.2538H27.0225M-15.75 28.2538V32.3788V36.5038M11.412 37.2538H42.588C46.053 37.2538 48.2175 33.5031 46.485 30.5038L30.897 3.50383C29.1645 0.504582 24.8355 0.504582 23.103 3.50383L7.51501 30.5038C5.78251 33.5031 7.94701 37.2538 11.412 37.2538Z"
        stroke="#EFB110"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1 19H1.0225M1 1V10"
        transform="translate(25.8,11)"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default WarningIcon;
