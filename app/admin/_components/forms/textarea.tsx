import { ComponentPropsWithoutRef } from "react";

type TextareaProps = ComponentPropsWithoutRef<'textarea'> & {
  label?: string;
  error?: string;
  required?: boolean;
  resize?: 'none' | 'both' | 'horizontal' | 'vertical';
};

export default function Textarea({
  label,
  error,
  required,
  className = "",
  resize = "none",
  ...props
}: TextareaProps) {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <textarea
        {...props}
        className={`w-full rounded-lg border bg-white px-4 py-2 text-sm focus:border-sapphire-normal focus:outline-none focus:ring-1 focus:ring-sapphire-normal resize-${resize} ${error ? 'border-red-500' : 'border-gray-300'
          } ${className}`}
      />
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
}
