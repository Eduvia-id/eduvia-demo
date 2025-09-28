import React, { ComponentPropsWithRef } from 'react'
import { HiSearch } from 'react-icons/hi'

type SearchInputProps = ComponentPropsWithRef<'input'>

export default function SearchInput({
  value = "",
  placeholder = "Search",
  className = "",
  ...props
}: SearchInputProps) {
  return (
    <div className={`relative ${className}`}>
      <HiSearch className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-sapphire-normal" />
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={props.onChange}
        className="w-full rounded-full border border-gray-300 bg-white py-2 pl-10 pr-4 text-sm focus:border-sapphire-normal focus:outline-none focus:ring-1 focus:ring-sapphire-normal"
      />
    </div>
  )
}
