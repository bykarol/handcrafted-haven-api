import Link from 'next/link';
import { FaceFrownIcon } from '@heroicons/react/24/outline';

export default function NotFound() {
  return <main  className="flex h-full flex-col items-center justify-center gap-2">
      <FaceFrownIcon className="w-10 text-gray-400" />
      <h1 className="text-xl font-semibold">Not found &#8722; 404!</h1>
      <p className='mb-10'>Could not find the requested page.</p>
      <div>
        <Link className="bg-golden text-textButtons font-bold rounded-md px-10 py-2 hover:bg-[#F7BE38]/60" href="/handcrafted-haven">Go back to Home</Link>
      </div>
  </main>
}
