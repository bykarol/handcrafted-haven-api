import Link from 'next/link';
import NavLinks from '@/app/ui/nav/nav-links';
import Search from '@/app/ui/search';
import { primaryFont, secondaryFont } from '@/app/ui/fonts';
import { PowerIcon } from '@heroicons/react/24/outline';
import { Suspense } from 'react';

export default function Nav() {
  return (
    <div className="grid grid-cols-3 text-mainTitles py-3 px-7">
      <div>
        <div className={`text-4xl text-center ${primaryFont.className}`}>
          Handcrafted
        </div>
        <div className={`text-3xl text-center ${secondaryFont.className}`}>
          Haven
        </div>
      </div>
      <div>
        <div className="flex justify-center">
          <NavLinks />
        </div>
        <div className="mt-0.5 flex items-center justify-between">
          <Suspense fallback={<div>Loading...</div>}>
            <Search placeholder="Search" />
          </Suspense>
        </div>
      </div>
      <div className="flex flex-col items-end">
        <form>
          <button>
            <div className="text-xl p-2 m-1 rounded-xl hover:bg-golden">
              Logout
            </div>
          </button>
        </form>
      </div>
    </div>
  );
}
