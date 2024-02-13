type Props = {
  className?: string;
};

function EditCampaign(props: Props) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.0419 3.48822L12.2751 5.84555M10.9892 2.48822C11.2854 2.17562 11.6871 2 12.1059 2C12.5247 2 12.9264 2.17562 13.2225 2.48822C13.5187 2.80082 13.685 3.2248 13.685 3.66689C13.685 4.10897 13.5187 4.53295 13.2225 4.84555L4.52693 14.0242H2.31641V11.6429L10.9892 2.48822Z"
        stroke="white"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default EditCampaign;
