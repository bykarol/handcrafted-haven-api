'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
  {
    name: 'Home',
    href: '/handcrafted-haven',
  },
  {
    name: 'Artisans',
    href: '/handcrafted-haven/artisans',
  },
  {
    name: 'Products',
    href: '/handcrafted-haven/products',
  },
  {
    name: 'About us',
    href: '/handcrafted-haven/about-us',
  },
];

export default function NavLinks() {
  const pathname = usePathname();
  
  return (
    <>
      {links.map((link) => {
        return (
          <Link key={link.name} href={link.href}>
            {<p className={clsx('text-lg p-2 m-1 rounded hover:bg-golden', {'bg-golden': pathname === link.href})}>{link.name}</p>}
          </Link>
        );
      })}
    </>
  );
}
