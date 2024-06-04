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