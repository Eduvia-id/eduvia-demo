import Link from 'next/link';
import Image from 'next/image';
import { AUTH_NAV_ITEMS, UNAUTH_NAV_ITEMS } from '@/lib/navigation';
import NavItem from './nav-item';
import { Button } from '../../../_components/button';

type DesktopNavProps = {
  isAuthenticated: boolean;
};

export default function DesktopNav({ isAuthenticated }: DesktopNavProps) {
  const navItems = isAuthenticated ? AUTH_NAV_ITEMS : UNAUTH_NAV_ITEMS;

  return (
    <div className="hidden md:flex items-center space-x-8">
      <div className="flex items-center space-x-8">
        {navItems.map((item) => (
          <NavItem key={item.path} item={item} variant="desktop" />
        ))}
      </div>

      <div className='flex items-center space-x-4'>
        {isAuthenticated ? (
          <Link className="flex items-center space-x-2 ml-4" href="/profile">
            <Image
              src="/images/img-placeholder-avatar.jpg"
              alt="User Avatar"
              width={40}
              height={40}
              className="rounded-full border-2 border-salmon-normal"
            />
            <span className="text-md text-gray-700">John Doe</span>
          </Link>
        ) : (
          <>
            <Button href="/signup" variant="outline">
              Daftar
            </Button>
            <Button href="/login" variant="fill">
              Login
            </Button>
          </>
        )}
      </div>
    </div>
  );
};