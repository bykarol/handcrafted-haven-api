import Link from 'next/link';
import NavLinks from '@/app/ui/nav/nav-links';
import Search from '@/app/ui/search';
import { primaryFont, secondaryFont } from '@/app/ui/fonts';
import { PowerIcon } from '@heroicons/react/24/outline';

export default function Nav() {
  return (
    <div className="py-3 px-7 navegation">
      <div>
        <div className={` ${primaryFont.className} text-4xl text-center`}>
          Handcrafted
        </div>
        <div className={`${secondaryFont.className} text-3xl text-center`}>
          Haven
        </div>
      </div>
      <div>
        <div className="navegation-links">
          <NavLinks />
        </div>
        <div className="mt-0.5 flex items-center justify-between">
          <Search placeholder="Search" />
        </div>
      </div>
      <div className="sign">
        <form>
          <button>
            <div className='text-xl p-2 m-1 rounded-xl hover:bg-golden'>Logout</div>
          </button>
        </form>
      </div>
    </div>
  );
}
