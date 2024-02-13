import React from "react";

type Props = {
  className?: string;
};

const ArrowDropDown = (props: Props) => {
  return (
    <svg
      width="14"
      height="7"
      viewBox="0 0 16 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 1L8 8L1 1"
        stroke="#3A4248"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowDropDown;
