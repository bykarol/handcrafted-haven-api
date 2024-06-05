'use server';

import { sql } from "@vercel/postgres";
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from "zod";

const ReviewSchema = z.object({
  id_s: z.string(),
  product_id_s: z.string(),
  reviewdescription: z.string(),
  reviewrating: z.string(),
  reviewdate: z.string(),
})

const CreateReview = ReviewSchema;
// export const createReview = async (formData: FormData, product_id: number) => {
export async function createReview(formData: FormData) {

  // console.log({formData});
  const { id_s, product_id_s, reviewdescription, reviewrating, reviewdate } = CreateReview.parse({
    id_s: formData.get('id'),
    product_id_s: formData.get('product_id'),
    reviewdescription: formData.get('reviewdescription'),
    reviewrating: formData.get('reviewrating'),
    reviewdate: formData.get('reviewdate'),

  });

  const product_id = parseInt(product_id_s);
  const id = parseInt(id_s);
  // console.log({id, product_id, reviewdescription, reviewrating, reviewdate});


  // // Insert data into the database
  try {
    await sql`
      INSERT INTO reviews (id, product_id, reviewdescription, reviewrating, reviewdate)
      VALUES (${id}, ${product_id}, ${reviewdescription}, ${reviewrating}, ${reviewdate})`;
  } catch (error) {
    // If a database error occurs, return a more specific error.
    // return {
    console.error('Database Error: Failed to Create Invoice.', error);
    // };
  }

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