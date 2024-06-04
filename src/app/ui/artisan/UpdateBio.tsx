'use client';

import { useFormState } from 'react-dom';
import { Artisan } from '@/app/lib/definitions';
import Link from 'next/link';
import { Button } from '../button';
import { updateBioWithId} from '@/app/lib/actions';
import { UpdateBio } from '@/app/lib/actions';

export default function UpdateBioForm({artisans}: { artisans: Artisan}) {

  // const initialState = { message: null, errors: {} };
  // const updateInfo = updateBioWithId.bind(null, (artisans.id).toString());
  // const [state, dispatch] = useFormState(updateInfo, initialState);
 
  return (<form action={async FormData => {
    const review = await updateBioWithId(FormData);}}>
    <div className=''>
    <label htmlFor="fname">First Name: </label>
    <input type="text" id="fname" name="artisanfname" defaultValue={artisans.artisanfname} required/>
    </div>

    <div>
    <label htmlFor="lname">Last Name: </label>
    <input type="text" id="lname" name="artisanlname" defaultValue={artisans.artisanlname} required/>
    </div>

    <div>
    <label htmlFor="email">Email: </label>
    <input type="email" id="email" name="artisanemail" defaultValue={artisans.artisanemail} required/>
    </div>

    <div>
    <label htmlFor="phone">Phone Number: </label>
    <input type="tel" id="phone" name="artisanphone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" defaultValue={artisans.artisanphone}/>
    </div>

    <div>
    <label htmlFor="bio">Bio: </label>
    <input type="text" id="bio" name="artisaninfo" defaultValue={artisans.artisaninfo} required/>
    </div>

       
    {/* Buttons at the end of the form */}
    <div className="">
        <Link href="/handcrafted-haven/artisans"
          className="">Cancel</Link>
        <Button type="submit">Edit Bio</Button>
      </div>
    </form>
  );}
