import React from "react";

interface ExitIconProps {
  onClick?: () => void;
}

const ExitIcon: React.FC<ExitIconProps> = ({ onClick = () => {} }) => {
  return (
    <svg
      width="16"
      height="16"
      onClick={onClick}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.0607 3.06066C15.6464 2.47487 15.6464 1.52513 15.0607 0.93934C14.4749 0.353553 13.5251 0.353553 12.9393 0.93934L8 5.87868L3.06066 0.93934C2.47487 0.353553 1.52513 0.353553 0.93934 0.93934C0.353553 1.52513 0.353553 2.47487 0.93934 3.06066L5.87868 8L0.93934 12.9393C0.353553 13.5251 0.353553 14.4749 0.93934 15.0607C1.52513 15.6464 2.47487 15.6464 3.06066 15.0607L8 10.1213L12.9393 15.0607C13.5251 15.6464 14.4749 15.6464 15.0607 15.0607C15.6464 14.4749 15.6464 13.5251 15.0607 12.9393L10.1213 8L15.0607 3.06066Z"
        fill="#002954"
      />
    </svg>
  );
};

export default ExitIcon;
