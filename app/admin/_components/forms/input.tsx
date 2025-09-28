import React from 'react';
import { ComponentPropsWithoutRef } from 'react';

type InputProps = ComponentPropsWithoutRef<'input'> & {
  label?: string;
  error?: string;
  required?: boolean;
};

export default function Input({
  label,
  error,
  required,
  className = "",
  ...props
}: InputProps) {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <input
        {...props}
        className={`w-full rounded-lg border bg-white px-4 py-2 text-sm focus:border-sapphire-normal focus:outline-none focus:ring-1 focus:ring-sapphire-normal ${error ? 'border-red-500' : 'border-gray-300'
          } ${className}`}
      />
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
}