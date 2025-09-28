import { ComponentPropsWithRef } from "react";

type BadgeProps = ComponentPropsWithRef<'span'> & {
  status: string;
  type?: 'success' | 'danger' | 'warning' | 'info' | 'default';
};

export default function Badge({
  status,
  type = 'info',
  className = '',
  ...props
}: BadgeProps) {
  const baseClasses =
    "inline-flex rounded-full px-3 py-1 text-xs font-semibold cursor-default";

  const typeClasses = {
    success: "bg-green-100 text-green-800",
    danger: "bg-red-100 text-red-800",
    warning: "bg-yellow-100 text-yellow-800",
    info: "bg-blue-100 text-blue-800",
    default: "bg-gray-100 text-gray-800",
  }[type];

  return (
    <span className={`${baseClasses} ${typeClasses} ${className}`} {...props}>
      {status}
    </span>
  );
}