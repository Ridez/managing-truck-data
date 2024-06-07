import React from "react";
import classNames from "classnames";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger" | "warning";
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  className,
  ...props
}) => {
  const baseStyles = "px-4 py-2 rounded focus:outline-none focus:ring";

  const variantStyles = {
    primary: "bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-300",
    secondary: "bg-gray-500 text-white hover:bg-gray-600 focus:ring-gray-300",
    danger: "bg-red-500 text-white hover:bg-red-600 focus:ring-red-300",
    warning:
      "bg-yellow-500 text-white hover:bg-yellow-600 focus:ring-yellow-300",
  };

  const combinedStyles = classNames(
    baseStyles,
    variantStyles[variant],
    className
  );

  return (
    <button className={combinedStyles} {...props}>
      {children}
    </button>
  );
};

export default Button;
