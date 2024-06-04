'use server';

import { sql } from "@vercel/postgres";
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export const createReview = async (formData: FormData, product_id: number) => {

    const reviewdescription = formData.get('reviewdescription')
    const reviewrating = formData.get('reviewrating')
    const reviewdate = formData.get('reviewdate')

    if (!reviewdescription || !reviewrating || !reviewdate) return
    
    const newReview = { 
        reviewdescription: reviewdescription.toString(),
        reviewrating: reviewrating.toString(),
        reviewdate: reviewdate.toString()
    }

    console.log({newReview, product_id})

    // Insert data into the database
    // try {
    //     await sql`
    //     INSERT INTO reviews (product_id, reviewdescription, reviewrating, reviewdate)
    //     VALUES (${product_id}, ${newReview.reviewdescription}, ${newReview.reviewrating}, ${newReview.reviewdate})`;
    // } catch (error) {
    //     // If a database error occurs, return a more specific error.
    //     return {
    //         message: 'Database Error: Failed to Create Invoice.',
    //     };
    // }
    
    revalidatePath(`/handcrafted-haven/products/${product_id}`);
    redirect(`/handcrafted-haven/products/${product_id}`);

}


// Update Bio action for Artisan Form 

  export async function updateBioWithId(
    // id: string,
    // prevState: State,
    // artisans: Artisan,
    formData: FormData
  ) {
        
    const UpdateBio = ({
      artisanId: formData.get('id'),
      artisanfname: formData.get('artisanfname'),
      artisanlname: formData.get('artisanlname'),
      artisanemail: formData.get('artisanemail'),
      artisanphone: formData.get('artisanphone'),
      artisaninfo: formData.get('artisaninfo')
    });
        //  If form validation fails, return errors early. Otherwise, continue.
    if (!UpdateBio) {
      return {
        message: 'Missing Fields. Failed to Update Bio.',
      };
    }
        // console.log(UpdateBio);
    //   Prepare data for insertion into the database
    // pero 
   
    revalidatePath('/handcrafted-haven/artisans');
    redirect('/handcrafted-haven/artisans');
  }