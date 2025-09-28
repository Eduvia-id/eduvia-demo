"use client";

import { useState } from "react";
import type React from "react";
import type { ComponentPropsWithRef, FC } from "react";
import { HiEye, HiEyeSlash } from "react-icons/hi2";

type InputProps = ComponentPropsWithRef<"input"> & {
  type?: "text" | "number" | "email" | "password" | "date" | "time" | string;
  success?: boolean;
  error?: boolean;
  hint?: string;
  leftIcon?: React.ReactNode;
};

const Input: FC<InputProps> = ({
  type = "text",
  id,
  name,
  placeholder,
  value,
  onChange,
  className = "",
  min,
  max,
  step,
  disabled = false,
  autoComplete = "on",
  success = false,
  error = false,
  hint,
  readOnly = false,
  leftIcon,
  ...props
}) => {
  const [touched, setTouched] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const baseClasses = `w-full font-roboto rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-hidden focus:ring-1`;

  const stateClasses = disabled
    ? `text-gray-500 border-gray-300 opacity-40 bg-gray-100 cursor-not-allowed`
    : touched && error
      ? `border-error-500 focus:border-error-300 focus:ring-error-500/20`
      : touched && success
        ? `border-success-500 focus:border-success-300 focus:ring-success-500/20`
        : `bg-transparent text-gray-800 border-gray-300 focus:border-salmon-normal focus:ring-salmon-normal`;

  const inputClasses = `${baseClasses} ${stateClasses} ${className}`;
  const showPasswordToggle = type === "password";
  const currentInputType = showPasswordToggle && showPassword ? "text" : type;

  return (
    <div className="relative">
      {leftIcon && (
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-salmon-normal">
          {leftIcon}
        </div>
      )}
      <input
        type={currentInputType}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={() => setTouched(true)}
        min={min}
        max={max}
        step={step}
        disabled={disabled || readOnly}
        autoComplete={autoComplete}
        className={`${inputClasses} ${leftIcon ? "pl-10" : ""} ${showPasswordToggle ? "pr-10" : ""
          }`}
        {...props}
      />
      {showPasswordToggle && (
        <button
          type="button"
          className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400"
          onClick={() => setShowPassword(!showPassword)}
          disabled={disabled}
        >
          {showPassword ? (
            <HiEyeSlash className="h-5 w-5" aria-hidden="true" />
          ) : (
            <HiEye className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      )}
      {hint && touched && (
        <p
          className={`mt-1.5 text-xs ${error
            ? "text-error-500"
            : success
              ? "text-success-500"
              : "text-gray-500"
            }`}
        >
          {hint}
        </p>
      )}
    </div>
  );
};

export default Input;