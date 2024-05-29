'use client';

import Link from 'next/link';
import NavLinks from '@/app/ui/nav/nav-links';
import Search from '@/app/ui/search';
import { primaryFont, secondaryFont } from '@/app/ui/fonts';
import { PowerIcon } from '@heroicons/react/24/outline';
import { Suspense, useState } from 'react';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  function getMenuClasses() {
    let menuClases = [];

    if (isOpen) {
      menuClases = ['flex-col'];
    } else {
      menuClases = ['hidden', 'md:flex'];
    }
    return menuClases.join(' ');
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
        <form>
          <button>
            <div className="text-xl p-2 m-1 rounded-xl hover:bg-golden">
              Logout
            </div>
          </button>
        </form>
      </div>

      <div className="md:hidden flex items-center">
        <button
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="50"
            height="50"
            viewBox="0 0 256 256"
          >
            <g
              fill="#8b4513"
              fillRule="nonzero"
              stroke="none"
              strokeWidth="1"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              strokeMiterlimit="10"
              style={{ mixBlendMode: 'normal' }}
            >
              <g transform="scale(5.12,5.12)">
                <path d="M0,9v2h50v-2zM0,24v2h50v-2zM0,39v2h50v-2z"></path>
              </g>
            </g>
          </svg>
        </button>
      </div>
    </nav>
  );
}
