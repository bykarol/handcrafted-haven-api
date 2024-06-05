'use client';

import { useFormState } from 'react-dom';
import { Artisan } from '@/app/lib/definitions';
import Link from 'next/link';
// import { Button } from '../button';
import { updateBioWithId} from '@/app/lib/actions';

// import { UpdateBio } from '@/app/lib/actions';

export default function UpdateBioForm({artisans}: { artisans: Artisan}) {

  // const initialState = { message: null, errors: {} };
  // const updateInfo = updateBioWithId.bind(null, (artisans.id).toString());
  // const [state, dispatch] = useFormState(updateInfo, initialState);
 
  return (
  <div className="flex flex-col items-center px-10 py-2 my-10 max-w-md mx-auto">
    <form action={async FormData => {
    const info = await updateBioWithId(FormData);}}>

    <div className='flex flex-row items-center px-5 py-2 my-5'>
    <label htmlFor="fname" className="font-semibold mb-1">First Name: </label>
    <input type="text" id="fname" name="artisanfname" defaultValue={artisans.artisanfname} className="w-full border border-gray rounded-md p-2"  required/>
    </div>

    <div className='flex flex-row items-center px-5 py-2 my-5'>
    <label htmlFor="lname" className="font-semibold mb-1">Last Name: </label>
    <input type="text" id="lname" name="artisanlname" defaultValue={artisans.artisanlname} className=" w-full border border-gray rounded-md p-2"  required/>
    </div>

    <div className='flex flex-row items-center px-5 py-2 my-5'>
    <label htmlFor="email" className="font-semibold mb-1">Email: </label>
    <input type="email" id="email" name="artisanemail" defaultValue={artisans.artisanemail} className=" w-full border border-gray rounded-md p-2"  required/>
    </div>

    <div className='flex flex-row items-center px-5 py-2 my-5'>
    <label htmlFor="phone" className="font-semibold mb-1">Phone Number: </label>
    <input type="tel" id="phone" name="artisanphone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" defaultValue={artisans.artisanphone} className=" w-full border border-gray rounded-md p-2" required/>
    </div>

    <div className='flex flex-row items-right px-5 py-2 my-5'>
    <label htmlFor="bio" className="font-semibold mb-1">Bio: </label>
    <textarea id="bio" name="artisaninfo" rows={10} defaultValue={artisans.artisaninfo}  className="w-full border border-gray rounded-md px-2 py-3 mb-10 block"  required 
    />
    </div>

       
    {/* Buttons at the end of the form */}
    <div className="flex flex-row justify-evenly items-center ">
      <div className="bg-golden rounded-md px-10 py-2 my-10">
        <Link href="/handcrafted-haven/artisans"
          className="font-semibold ">Cancel</Link>
      </div>
      <div className="bg-golden rounded-md px-10 py-2 my-10">
        <button type="submit" className="font-semibold ">Edit Bio</button>
      </div>
    </div>
    </form>
    </div>
  );}