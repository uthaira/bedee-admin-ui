type Props = {
  className?: string;
};

function ClearIcon(props: Props) {
  return (
    <svg
      className={props.className}
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.66699 8.33341L5.00033 5.00008M5.00033 5.00008L8.33366 1.66675M5.00033 5.00008L1.66699 1.66675M5.00033 5.00008L8.33366 8.33341"
        stroke="#939CA9"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default ClearIcon;
