'use server';

import { sql } from "@vercel/postgres";
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from "zod";



// //////////////////
//      REVIEWS
// //////////////////

const ReviewSchema = z.object({
  id: z.coerce.number(),
  product_id: z.coerce.number(),
  reviewdescription: z.string(),
  reviewrating: z.string(),
  reviewdate: z.string(),
})


const CreateReview = ReviewSchema.omit({ });

export async function createReview(formData: FormData) {


  const validatedFields = CreateReview.safeParse({
    id: formData.get('id'),
    product_id: formData.get('product_id'),
    reviewdescription: formData.get('reviewdescription'),
    reviewrating: formData.get('reviewrating'),
    reviewdate: formData.get('reviewdate'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Update Invoice.',
    };
  }

  const { id, product_id, reviewdescription, reviewrating, reviewdate } = validatedFields.data;

  // // Insert data into the database
  try {
    await sql`
      INSERT INTO reviews (id, product_id, reviewdescription, reviewrating, reviewdate)
      VALUES (${id}, ${product_id}, ${reviewdescription}, ${reviewrating}, ${reviewdate})`;
  } catch (error) {
    return { message: 'Database Error: Failed to Create Review.' };
  }

  revalidatePath(`/handcrafted-haven/products/${product_id}`);
  redirect(`/handcrafted-haven/products/${product_id}`);
}


const UpdateReview = ReviewSchema.omit({ });

export async function updateReview(formData: FormData) {

  const validatedFields = UpdateReview.safeParse({
    id: formData.get('id'),
    product_id: formData.get('product_id'),
    reviewdescription: formData.get('reviewdescription'),
    reviewrating: formData.get('reviewrating'),
    reviewdate: formData.get('reviewdate'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Update Invoice.',
    };
  }

  
  const { id, product_id, reviewdescription, reviewrating, reviewdate } = validatedFields.data;

  // // // Update data into the database
  try {
    await sql`
      UPDATE reviews 
      SET id = ${id}, 
          product_id = ${product_id}, 
          reviewdescription = ${reviewdescription}, 
          reviewrating = ${reviewrating}, 
          reviewdate = ${reviewdate}
      WHERE id = ${id}`
  } catch (error) {
    return { message: 'Database Error: Failed to Update Review.' };
  }

  console.log({id, product_id, reviewdescription, reviewrating, reviewdate })

  revalidatePath(`/handcrafted-haven/products/${product_id}`);
  redirect(`/handcrafted-haven/products/${product_id}`);
}




export async function deleteReview(id: number) {

  console.log({id});
  try {
    await sql`DELETE FROM reviews WHERE id = ${id}`;
    revalidatePath('/dashboard/invoices');
    return { message: 'Deleted Review.' };
  } catch (error) {
    return { message: 'Database Error: Failed to Delete Review.' };
  }
}





// /////////////////////////
//  ARTISANS SERVER ACTION 
// /////////////////////////

const FormSchema = z.object({
    artisanId: z.coerce.number(),
    artisanfname: z.string(),
    artisanlname: z.string(),
    artisanemail: z.string(),
    artisanphone: z.string(),
    artisaninfo: z.string()
  });
   
  // Use Zod to update the expected types
  const UpdateBio = FormSchema.omit({});

// Update Bio action for Artisan Form 

export async function updateBio(formData: FormData) {

    const validatedFields = UpdateBio.safeParse({
      artisanId: formData.get('artisanId'),
      artisanfname: formData.get('artisanfname'),
      artisanlname: formData.get('artisanlname'),
      artisanemail: formData.get('artisanemail'),
      artisanphone: formData.get('artisanphone'),
      artisaninfo: formData.get('artisaninfo')
  });

  //  If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Update Bio.',
    };
  }

    // Prepare data for insertion into the database
  
      const {artisanId, artisanfname, artisanlname, artisanemail, artisanphone,  artisaninfo} = validatedFields.data;

      // Insert data into the database
    try {
      await sql`
        UPDATE artisans
        SET id = ${artisanId}, 
        artisanfname = ${artisanfname},
        artisanlname = ${artisanlname}, 
        artisanemail = ${artisanemail}, 
        artisanphone = ${artisanphone}, 
        artisaninfo = ${artisaninfo}
        WHERE id = ${artisanId}
      `;
    } catch (error) {
      return { message: 'Database Error: Failed to Update Artisan Bio.' };
    }
   

  revalidatePath(`/handcrafted-haven/artisans/${artisanId}`);
  redirect(`/handcrafted-haven/artisans/${artisanId}`);
}