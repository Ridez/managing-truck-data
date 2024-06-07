import React from "react";
import classNames from "classnames";

interface InputProps {
  className?: string;
  error?: boolean;
  errorMessage?: string;
  type?: "text" | "textarea";
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  optional?: boolean;
  label?: string;
  value?: any;
  id: string;
  ref?: any;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      optional,
      className = "",
      error = false,
      errorMessage,
      type = "text",
      placeholder = "",
      onChange = () => {},
      disabled = false,
      value,
      id,
      ...props
    },
    ref
  ) => {
    const inputElement =
      type === "textarea" ? (
        <textarea
          {...props}
          id={id}
          className={classNames(
            "block w-full p-2 border rounded mt-1 text-neutral-30 text-lg leading-7 transition border-neutral-40 focus:border-primary-20 focus:outline-none",
            {
              "border-error-60": error,
              "bg-transparent": true,
            }
          )}
          value={value}
          disabled={disabled}
          ref={ref as React.Ref<HTMLTextAreaElement>}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
            onChange(e as unknown as React.ChangeEvent<HTMLInputElement>); // Cast type to keep onChange prop consistent
          }}
          placeholder={placeholder}
        />
      ) : (
        <input
          {...props}
          id={id}
          className={classNames(
            "block w-full p-2 border rounded mt-1 font-normal text-neutral-30 text-lg leading-7 transition border-neutral-40",
            {
              "border-error-60": error,
              "bg-transparent": true,
            }
          )}
          value={value}
          disabled={disabled}
          ref={ref as React.Ref<HTMLInputElement>}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            onChange(e);
          }}
          placeholder={placeholder}
          type={type}
        />
      );

    return (
      <div
        className={classNames("relative", className, {
          "opacity-50": disabled,
        })}
      >
        {label && (
          <label
            htmlFor={id}
            className="pb-3 text-base font-medium text-neutral-20 transition-all duration-300 ease-in-out"
          >
            {label}
            {optional && <span className="ml-2">Optional</span>}
          </label>
        )}
        <div className="relative flex items-center">
          {inputElement}
          {error && (
            <div className="absolute text-red-600 text-sm bottom-[-1.3rem]">
              {errorMessage}
            </div>
          )}
        </div>
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
