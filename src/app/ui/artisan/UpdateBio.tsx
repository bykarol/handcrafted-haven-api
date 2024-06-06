'use client';

import { Artisan } from '@/app/lib/definitions';
import Link from 'next/link';
import { updateBio} from '@/app/lib/actions';


export default function UpdateBioForm({artisan}: { artisan: Artisan}) { 

  

  return (<form action={ async FormData =>{await updateBio(FormData)}}>

  <div className='flex flex-col gap-5 p-5 my-5'>
    <div >
      <label htmlFor="fname" className="font-semibold m-2">First Name </label>
      <input type="text" id="fname" name="artisanfname" defaultValue={artisan.artisanfname} className="w-full border border-gray rounded-md p-2"  required/>
    </div>

    <div >
      <label htmlFor="lname" className="font-semibold m-2">Last Name </label>
      <input type="text" id="lname" name="artisanlname" defaultValue={artisan.artisanlname} className=" w-full border border-gray rounded-md p-2"  required/>
    </div>

    <div >
      <label htmlFor="email" className="font-semibold m-2">Email </label>
      <input type="email" id="email" name="artisanemail" defaultValue={artisan.artisanemail} className=" w-full border border-gray rounded-md p-2"  required/>
    </div>

    <div >
      <label htmlFor="phone" className="font-semibold m-2">Phone Number </label>
      <input type="tel" id="phone" name="artisanphone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" defaultValue={artisan.artisanphone} className=" w-full border border-gray rounded-md p-2" required/>
    </div>

    <div >
      <label htmlFor="bio" className="font-semibold m-2">Bio </label>
      <textarea id="bio" name="artisaninfo" rows={10} defaultValue={artisan.artisaninfo}  className="w-full border border-gray rounded-md px-2 py-3 mb-10 block"  required 
    />
    </div>
  </div>
    

    <input type="hidden" name='artisanId' value={artisan.id}/>


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
    
  );}