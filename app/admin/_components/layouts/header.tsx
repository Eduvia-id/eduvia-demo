import React from 'react'
import { HiBars3 } from 'react-icons/hi2'

type HeaderProps = {
  toggleSidebar: () => void
}

export default function Header({ toggleSidebar }: HeaderProps) {
  return (
    <header className="border-b border-gray-200 p-6 text-gray-500">
      <div className="flex items-center justify-between">
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-lg hover:bg-gray-100 transition-color"
        >
          <HiBars3 className="h-6 w-6" />
        </button>
        <span>Admin</span>
      </div>
    </header>
  )
}
