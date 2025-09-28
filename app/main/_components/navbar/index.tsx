import Image from 'next/image';
import Link from 'next/link';
import DesktopNav from './desktop-nav';
import MobileNav from './mobile-nav';


export default function Navbar() {
  const isAuthenticated = false;

  return (
    <nav className="sticky top-0 z-40 bg-white px-4 sm:px-10 py-4 flex justify-between items-center font-roboto">
      <Link href="/">
        <Image
          src="/icons/logo-full.svg"
          alt="Logo"
          width={168}
          height={51}
          className="w-42 cursor-pointer"
          priority
        />
      </Link>

      <DesktopNav isAuthenticated={isAuthenticated} />
      <MobileNav isAuthenticated={isAuthenticated} />
    </nav>
  );
}