'use client';

import NavLinks from '@/app/ui/nav/nav-links';
import Image from 'next/image';
import Search from '@/app/ui/search';
import { primaryFont, secondaryFont } from '@/app/ui/fonts';
import {
  PowerIcon,
  Bars3CenterLeftIcon,
  ArrowsPointingInIcon,
} from '@heroicons/react/24/outline';
import { Suspense, useState } from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';

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
  let profileImg = "/default-image.png";
  if (session?.user?.image) {
    profileImg = session.user.image;
  }

  function displayButton() {
    if (isOpen) {
      return <ArrowsPointingInIcon className="currentColor size-7" />;
    } else {
      return <Bars3CenterLeftIcon className="currentColor size-7" />;
    }
  }

  return (
    <nav className="text-mainTitles py-3 px-7 sm:p-6 md:flex md:justify-between md:items-center">
      <div>
        <div className={`text-4xl text-center ${primaryFont.className}`}>
          Handcrafted
        </div>
        <div className={`text-3xl text-center ${secondaryFont.className}`}>
          Haven
        </div>
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

      <div>
        <div className={getMenuClasses()}>
          <NavLinks />
        </div>

        <div className={'mt-0.5 items-center justify-between md:flex'}>
          <Suspense fallback={<div>Loading...</div>}>
            <Search placeholder="Search" />
          </Suspense>
        </div>
      </div>

      <div className="flex flex-col md:items-end">
        {session?.user ? (
          <div className="Flex items-center">
            <p>{session.user.name}</p>
            <Image
              src={profileImg}
              alt={`Photo of ${session.user.name}`}
              width={40}
              height={40}
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
