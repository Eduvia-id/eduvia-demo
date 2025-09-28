import React from 'react';
import { ComponentPropsWithoutRef } from 'react';
import { HiChevronDown } from 'react-icons/hi';

type SelectOption = {
  value: string;
  label: string;
};

type SelectProps = ComponentPropsWithoutRef<'select'> & {
  options: SelectOption[];
  placeholder?: string;
  label?: string;
  error?: string;
  required?: boolean;
};

export default function Select({
  options,
  placeholder = "Select an option",
  label,
  error,
  required,
  className = "",
  ...props
}: SelectProps) {
  const isPlaceholder = !props.value || props.value === "";

  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <div className='relative'>
        <select
          {...props}
          className={`w-full appearance-none rounded-lg border bg-white px-4 py-2 pr-10 text-sm focus:border-sapphire-normal focus:outline-none focus:ring-1 focus:ring-sapphire-normal ${isPlaceholder ? 'text-gray-500' : 'text-gray-900'
            } ${error ? 'border-red-500' : 'border-gray-300'} ${className}`}
        >
          <option value="">{placeholder}</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
          <HiChevronDown className="h-4 w-4 text-gray-500" />
        </span>
      </div>
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
}