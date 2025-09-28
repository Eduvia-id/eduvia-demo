import { ComponentPropsWithoutRef } from "react";
import Link from "next/link";
import { ClickButton } from "./click-button";
import { LinkButton } from "./link-button";

type ButtonBaseProps = {
  children: React.ReactNode;
  variant?: "fill" | "outline";
  color?: "primary" | "secondary" | "danger" | "success";
  size?: "sm" | "md";
  className?: string;
};

type ButtonAsLink = ButtonBaseProps &
  ComponentPropsWithoutRef<typeof Link> & {
    href: string;
    onClick?: never;
    disabled?: boolean;
  };

type ButtonAsButton = ButtonBaseProps &
  ComponentPropsWithoutRef<"button"> & {
    href?: never;
  };

type ButtonProps = ButtonAsLink | ButtonAsButton;

export function Button({
  children,
  variant = "fill",
  color = "primary",
  size = "md",
  className = "",
  disabled = false,
  ...props
}: ButtonProps) {
  const baseClasses = "flex items-center justify-center rounded-md text-center font-medium cursor-pointer gap-2 whitespace-nowrap";

  const sizeClasses = {
    sm: "px-3 py-1 text-xs",
    md: "px-4 py-2 text-sm"
  }[size];

  const colorVariantClasses = disabled
    ? {
      fill: "bg-gray-100 text-gray-400 cursor-not-allowed border border-gray-100",
      outline: "text-gray-400 border border-gray-300 cursor-not-allowed bg-transparent"
    }[variant]
    : {
      primary: {
        fill: "bg-sapphire-normal text-white hover:bg-sapphire-dark border border-sapphire-normal hover:border-sapphire-dark cursor-pointer",
        outline:
          "text-sapphire-normal hover:bg-sapphire-light hover:text-sapphire-dark border border-sapphire-normal cursor-pointer",
      },
      secondary: {
        fill: "bg-salmon-normal text-white hover:bg-salmon-normal-hover border border-salmon-normal hover:border-salmon-normal-hover cursor-pointer",
        outline:
          "text-salmon-normal hover:bg-salmon-normal hover:text-white border border-salmon-normal cursor-pointer",
      },
      danger: {
        fill: "bg-red-500 text-white hover:bg-red-600 border border-red-500 hover:border-red-600 cursor-pointer",
        outline:
          "text-red-500 hover:bg-red-500 hover:text-white border border-red-500 cursor-pointer",
      },
      success: {
        fill: "bg-green-500 text-white hover:bg-green-600 border border-green-500 hover:border-green-600 cursor-pointer",
        outline:
          "text-green-500 hover:bg-green-500 hover:text-white border border-green-500 cursor-pointer",
      },
    }[color][variant];

  const combinedClasses = `${baseClasses} ${sizeClasses} ${colorVariantClasses} ${className}`;

  if ("href" in props && props.href && !disabled) {
    return (
      <LinkButton {...props} className={combinedClasses}>
        {children}
      </LinkButton>
    );
  }

  if ("onClick" in props && props.onClick) {
    return (
      <ClickButton {...props} className={combinedClasses}>
        {children}
      </ClickButton>
    );
  }

  return (
    <button {...(props as ComponentPropsWithoutRef<'button'>)} className={combinedClasses}>
      {children}
    </button>
  );
}