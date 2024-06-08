import React from "react";
import styles from "./styles.module.scss";
import cn from "classnames";

const PrevIcon = () => {
  return (
    <div className="flex items-center justify-center w-8 h-8 border border-primary-500 rounded-lg">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
      >
        <path
          d="M10 5L6 8.59459L10 12"
          stroke="#002954"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default PrevIcon;
