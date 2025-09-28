import { Button } from '@/app/_components/button';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react'
import { HiClipboardList } from 'react-icons/hi';
import { HiArrowRightOnRectangle, HiBanknotes, HiBell, HiBookOpen, HiCalendar, HiCube, HiUsers } from 'react-icons/hi2';

type MenuItem = {
  name: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  path: string;
};

type SidebarProps = {
  isSidebarExpanded: boolean;
}

const menuItems: MenuItem[] = [
  { name: "Dashboard", icon: HiCube, path: '/' },
  { name: "Paket Belajar", icon: HiBookOpen, path: '/paket' },
  { name: "Tryout", icon: HiClipboardList, path: '/tryout' },
  { name: "Jadwal", icon: HiCalendar, path: '/jadwal' },
  { name: "List Pengguna", icon: HiUsers, path: '/users' },
  { name: "Transaksi", icon: HiBanknotes, path: '/transaksi' },
  { name: "Notifikasi", icon: HiBell, path: '/notifikasi' },
];

export default function Sidebar({ isSidebarExpanded }: SidebarProps) {
  const pathname = usePathname();
  const [isHovering, setIsHovering] = useState(false);

  const showText = isSidebarExpanded || isHovering;

  return (
    <div
      className={`
              ${isSidebarExpanded ? "w-80" : "w-20"}
              ${isHovering && !isSidebarExpanded ? "w-80" : ""}
              bg-sapphire-normal text-white transition-all duration-500 ease-in-out
              flex flex-col relative z-50 min-h-screen
            `}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Header Sidebar */}
      <div className="my-6 mx-auto">
        <Image
          alt='logo'
          src={showText ? "/icons/logo-full.svg" : "/icons/logo.svg"}
          width={200}
          height={64}
          className={`bg-white w-fit rounded-lg ${showText ? "h-16" : "h-14 p-1"}`}
        />
      </div>

      {/* Navigation */}
      <nav className="px-3 space-y-2 flex-1">
        {menuItems.map((item) => {
          const isActive = pathname === item.path || pathname.startsWith(`${item.path}/`);
          const Icon = item.icon;
          return (
            <Link
              key={item.name}
              className={`
                      p-3 flex items-center rounded-lg cursor-pointer transition-all duration-200
                      ${showText ? "gap-3" : "justify-center"}
                      ${isActive
                  ? "bg-white bg-opacity-20 text-sapphire-normal"
                  : "hover:bg-white hover:bg-opacity-10 hover:text-sapphire-normal"
                }
                    `}
              href={item.path}
            >
              <Icon className="h-5 w-5 min-w-[20px]" />
              {showText && (
                <span className="truncate whitespace-nowrap">{item.name}</span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="p-3 mb-6">
        <Button color='danger' className='w-full'>
          <HiArrowRightOnRectangle className="h-4 w-4" />
          {showText && <span className="whitespace-nowrap">Log Out</span>}
        </Button>
      </div>
    </div>
  )
}
