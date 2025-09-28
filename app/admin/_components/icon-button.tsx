import { ComponentPropsWithoutRef } from "react";
import Link from "next/link";

type IconButtonBaseProps = {
  icon: React.ReactNode;
  variant?: "primary" | "danger" | "secondary";
  size?: "sm" | "md" | "lg";
  className?: string;
  title?: string;
};

type IconButtonAsLink = IconButtonBaseProps &
  ComponentPropsWithoutRef<typeof Link> & {
    href: string;
    onClick?: never;
    disabled?: boolean;
  };

type IconButtonAsButton = IconButtonBaseProps &
  ComponentPropsWithoutRef<"button"> & {
    href?: never;
  };

type IconButtonProps = IconButtonAsLink | IconButtonAsButton;

const variantStyles = {
  primary: "text-sapphire-normal hover:bg-sapphire-light",
  danger: "text-red-500 hover:bg-red-50",
  secondary: "text-salmon-normal hover:bg-salmon-light"
};

const sizeStyles = {
  sm: "p-1",
  md: "p-2",
  lg: "p-3"
};

// IconClickButton component for button functionality
function IconClickButton({
  icon,
  onClick,
  variant = "primary",
  size = "sm",
  disabled = false,
  title,
  className = "",
  ...props
}: IconButtonBaseProps & ComponentPropsWithoutRef<"button">) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      title={title}
      className={`
        rounded transition-colors cursor-pointer
        disabled:opacity-50 disabled:cursor-not-allowed 
        ${variantStyles[variant]} 
        ${sizeStyles[size]} 
        ${className}
      `}
      {...props}
    >
      {icon}
    </button>
  );
}

// IconLinkButton component for link functionality
function IconLinkButton({
  icon,
  href,
  variant = "primary",
  size = "sm",
  disabled = false,
  title,
  className = "",
  ...props
}: IconButtonBaseProps & ComponentPropsWithoutRef<typeof Link> & { disabled?: boolean }) {
  const linkClasses = `
    rounded transition-colors inline-flex items-center justify-center
    ${disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : variantStyles[variant]} 
    ${sizeStyles[size]} 
    ${className}
  `;

  if (disabled) {
    return (
      <span
        title={title}
        className={linkClasses}
      >
        {icon}
      </span>
    );
  }

  return (
    <Link
      href={href}
      title={title}
      className={linkClasses}
      {...props}
    >
      {icon}
    </Link>
  );
}

// Main IconButton component
export function IconButton({
  icon,
  variant = "primary",
  size = "sm",
  disabled = false,
  title,
  className = "",
  ...props
}: IconButtonProps) {
  // Check if it's a link button
  if ("href" in props && props.href && !disabled) {
    return (
      <IconLinkButton
        icon={icon}
        variant={variant}
        size={size}
        disabled={disabled}
        title={title}
        className={className}
        {...props}
      />
    );
  }

  // Check if it's a click button
  if ("onClick" in props && props.onClick) {
    return (
      <IconClickButton
        icon={icon}
        variant={variant}
        size={size}
        disabled={disabled}
        title={title}
        className={className}
        {...props}
      />
    );
  }

  // Default button
  return (
    <IconClickButton
      icon={icon}
      variant={variant}
      size={size}
      disabled={disabled}
      title={title}
      className={className}
      {...(props as ComponentPropsWithoutRef<"button">)}
    />
  );
}