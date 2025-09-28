'use client';

import { ComponentPropsWithoutRef } from "react";

type ClickButtonProps = ComponentPropsWithoutRef<'button'>

export function ClickButton({ onClick, children, className, ...props }: ClickButtonProps) {
  return (
    <button
      onClick={onClick}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
} 