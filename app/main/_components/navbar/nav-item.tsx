'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

type NavItemProps = {
  item: {
    name: string;
    path: string;
  };
  variant?: 'desktop' | 'mobile';
  index?: number;
};

const NavItem = ({ item, variant = 'desktop', index = 0 }: NavItemProps) => {
  const pathname = usePathname();
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    setIsActive(pathname === item.path || pathname.startsWith(`${item.path}/`));
  }, [pathname, item.path]);

  // Mobile variant
  if (variant === 'mobile') {
    return (
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: index * 0.05 }}
        whileHover={{ x: isActive ? 0 : 5 }}
      >
        <Link
          href={item.path}
          aria-current={isActive ? 'page' : undefined}
          className="block py-3 px-2 rounded-md text-gray-500 hover:bg-gray-50 aria-[current=page]:font-semibold aria-[current=page]:text-salmon-normal aria-[current=page]:bg-salmon-50"
        >
          {item.name}
        </Link>
      </motion.div>
    );
  }

  // Desktop variant
  return (
    <motion.div whileHover={{ scale: isActive ? 1 : 1.05 }}>
      <Link
        href={item.path}
        aria-current={isActive ? 'page' : undefined}
        className="text-md text-gray-500 hover:text-salmon-normal aria-[current=page]:font-semibold aria-[current=page]:text-salmon-normal"
      >
        {item.name}
      </Link>
    </motion.div>
  );
};

export default NavItem;
