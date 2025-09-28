import Link from "next/link";
import { ComponentPropsWithoutRef } from "react";

type LinkButtonProps = ComponentPropsWithoutRef<typeof Link> & {
  className?: string;
};

export function LinkButton({ href, children, className, ...props }: LinkButtonProps) {
  return (
    <Link href={href} className={className} {...props}>
      {children}
    </Link>
  );
}
