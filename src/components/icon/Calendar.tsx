type Props = {
  className?: string;
};

function Calendar(props: Props) {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 7.80176V3.80176M16 7.80176V3.80176M7 11.8018H17M5 21.8018H19C19.5304 21.8018 20.0391 21.591 20.4142 21.216C20.7893 20.8409 21 20.3322 21 19.8018V7.80176C21 7.27132 20.7893 6.76262 20.4142 6.38754C20.0391 6.01247 19.5304 5.80176 19 5.80176H5C4.46957 5.80176 3.96086 6.01247 3.58579 6.38754C3.21071 6.76262 3 7.27132 3 7.80176V19.8018C3 20.3322 3.21071 20.8409 3.58579 21.216C3.96086 21.591 4.46957 21.8018 5 21.8018Z"
        stroke="#323A43"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Calendar;
