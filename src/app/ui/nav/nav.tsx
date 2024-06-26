'use client';

import NavLinks from '@/app/ui/nav/nav-links';
import Search from '@/app/ui/search';
import { primaryFont, secondaryFont } from '@/app/ui/fonts';
import {
  PowerIcon,
  Bars3CenterLeftIcon,
  ArrowsPointingInIcon,
  ShoppingCartIcon
} from '@heroicons/react/24/outline';
import { Suspense, useState } from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = useSession();
  //console.log(session);

  function getMenuClasses() {
    let menuClases = [];

    if (isOpen) {
      menuClases = ['flex-col'];
    } else {
      menuClases = ['hidden', 'md:flex'];
    }
    return menuClases.join(' ');
  }

  function displayButton() {
    if (isOpen) {
      return <ArrowsPointingInIcon className="currentColor size-7" />;
    } else {
      return <Bars3CenterLeftIcon className="currentColor size-7" />;
    }
  }

  return (
    <nav className="text-mainTitles py-3 px-7 sm:p-6 flex flex-col gap-2 md:flex-row md:justify-between md:items-center md:gap-20">
      <div>
        <Link href='/handcrafted-haven'>
          <div className={`text-3xl text-center ${primaryFont.className}`}>
            Handcrafted
          </div>
          <div className={`text-2xl text-center ${secondaryFont.className}`}>
            Haven
          </div>
        </Link>
      </div>

      <div className="md:hidden flex items-center">
        <button
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          {displayButton()}
        </button>
      </div>

      <div className='flex-1'>
        <div className={getMenuClasses()}>
          <NavLinks />
        </div>

        <div className={'mt-0.5 items-center justify-between md:flex'}>
          <Suspense fallback={<div>Loading...</div>}>
            <Search placeholder="Search" />
          </Suspense>
        </div>
      </div>
      <Link href={`/handcrafted-haven/cart`}>
        <div className='p-2 rounded hover:bg-golden'>
          <ShoppingCartIcon className="h-6 w-6" />
        </div>
      </Link>
      <div className="flex items-center md:items-end">
        {session?.user ? (
          <div className="Flex items-center">
            <p>{session.user.name}</p>
            <img
              src={session.user.image ?? '/default-image.png'}
              alt={session.user.name ?? 'User Image'}
              className="w-10 h-10 rounded-full center"
            />

            <button onClick={() => signOut()}>Logout</button>
          </div>
        ) : (
          <button onClick={() => signIn()}>
            <div className="text-xl p-2 m-1 rounded-xl hover:bg-golden">
              Sign In
            </div>
          </button>
        )}

      </div>
    </nav>
  );
}
