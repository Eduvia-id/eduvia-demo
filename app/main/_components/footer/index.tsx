import { UNAUTH_NAV_ITEMS } from '@/lib/navigation';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  const navItems = UNAUTH_NAV_ITEMS;

  return (
    <footer className="bg-sapphire-normal text-white pt-12 pb-4 px-12 rounded-t-4xl">
      <div className="flex flex-col md:flex-row justify-between gap-4">
        {/* Logo and Tagline */}
        <div className="flex flex-col items-start">
          <div className="flex items-center p-1 bg-white rounded-lg">
            <Image
              src="/icons/logo-full.svg"
              alt="Logo"
              width={168}
              height={51}
              className="w-42"
            />
          </div>
          <p className="text-md font-semibold mt-2 max-w-md">
            Bimbel Online CPNS terpercaya untuk masa depanmu. Belajar lebih terarah, tryout lebih nyata.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Navigasi</h3>
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link href={item.path} className="hover:font-semibold transition duration-200">{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Help & Policies */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Bantuan & Kebijakan</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/kebijakan-privasi" className="hover:font-semibold transition duration-200">Kebijakan Privasi</Link>
            </li>
            <li>
              <Link href="/syarat-ketentuan" className="hover:font-semibold transition duration-200">Syarat & Ketentuan</Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Kontak Kami</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              WhatsApp: 0812-3456-7890
            </li>
            <li className="flex items-center">
              Email: cs@eduvia.id
            </li>
            <li className="flex items-center">
              Jam Layanan: Setiap Hari, 09.00 - 21.00 WIB
            </li>
            <li className="flex items-center">
              Lokasi: Jakarta, Indonesia
            </li>
          </ul>
        </div>

      </div>

      <div>
        {/* Divider */}
        <div className="border-t border-gray-200 my-4"></div>

        {/* Copyright */}
        <div className="text-center text-sm">
          © 2025 Eduvia.Id. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
