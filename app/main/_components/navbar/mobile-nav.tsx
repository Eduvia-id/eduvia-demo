'use client';

import { AnimatePresence, motion } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';
import { AUTH_NAV_ITEMS, UNAUTH_NAV_ITEMS } from '@/lib/navigation';
import { useState } from 'react';
import NavItem from './nav-item';
import { Button } from '../../../_components/button';
import { HiBars3, HiXMark } from 'react-icons/hi2';

type MobileNavProps = {
  isAuthenticated: boolean;
};

export default function MobileNav({ isAuthenticated }: MobileNavProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navItems = isAuthenticated ? AUTH_NAV_ITEMS : UNAUTH_NAV_ITEMS;

  return (
    <>
      <motion.button
        className="md:hidden text-gray-500 focus:outline-none"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
      >
        <HiBars3 className="h-6 w-6" />
      </motion.button>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 bg-black/50 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed right-0 top-0 z-50 h-full w-64 bg-white shadow-lg font-roboto md:hidden"
            >
              <div className="flex flex-col h-full">
                {/* Sidebar Header */}
                <div className="flex justify-between items-center p-4 border-b border-gray-200">
                  <Link href="/">
                    <Image
                      src="/icons/logo-full.svg"
                      alt="Logo"
                      width={120}
                      height={40}
                      className="w-28 cursor-pointer"
                    />
                  </Link>
                  <motion.button
                    className="text-gray-500 focus:outline-none"
                    onClick={() => setIsMobileMenuOpen(false)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <HiXMark className="h-6 w-6" />
                  </motion.button>
                </div>

                {/* Sidebar Content */}
                <div className="flex-1 overflow-y-auto overflow-x-hidden p-4">
                  <div className="flex flex-col space-y-2">
                    {navItems.map((item, index) => (
                      <NavItem
                        key={item.path}
                        item={item}
                        variant="mobile"
                        index={index}
                      />
                    ))}
                  </div>
                </div>

                {/* Sidebar Footer */}
                <motion.div
                  className="p-4 border-t border-gray-200 font-roboto flex items-center space-x-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {isAuthenticated ? (
                    <Link className="flex items-center space-x-2" href="/profile">
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
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};