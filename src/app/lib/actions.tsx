'use server';
 
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { Artisan } from './definitions';
// import { signIn } from '@/auth';
// import AuthError from "next-auth";
 
// export async function authenticate(
//   prevState: string | undefined,
//   formData: FormData,
// ) {
//   try {
//     await signIn('credentials', formData);
//   } catch (error) {
//     if (error instanceof AuthError) {
//       switch (error.type) {
//         case 'CredentialsSignin':
//           return 'Invalid credentials.';
//         default:
//           return 'Something went wrong.';
//       }
//     }
//     throw error;
//   }
// }

const FormSchema = z.object({
  

  // artisanId: z.string(),
  artisanId: z.string({ invalid_type_error: 'Please select an artisan.',}),
  artisanfname: z.string(),
  artisanlname: z.string(),
  artisanemail: z.string(),
  artisanphone: z.string(),
  artisaninfo: z.string()
});
 
// Use Zod to update the expected types
export const UpdateBio = FormSchema.omit({ artisanId: true });
 

export type State = {
    errors?: {
      artisanId?: string[];
      artisanfname?: string[];
      artisanlname?: string[];
      artisanemail?: string[];
      artisanphone?: string[];
      artisaninfo?: string[];
    };
    message?: string | null;
  };

export async function updateBioWithId(
  // id: string,
  // prevState: State,
  // artisans: Artisan,
  formData: FormData,
) {
      // Validate form using Zod
  const validatedFields = UpdateBio.safeParse({
    artisanId: formData.get('id'),
    artisanfname: formData.get('artisanfname'),
    artisanlname: formData.get('artisanlname'),
    artisanemail: formData.get('artisanemail'),
    artisanphone: formData.get('artisanphone'),
    artisaninfo: formData.get('artisaninfo')
  });
    //    If form validation fails, return errors early. Otherwise, continue.
  // if (!validatedFields.success) {
  //   return {
  //     errors: validatedFields.error.flatten().fieldErrors,
  //     message: 'Missing Fields. Failed to Update Bio.',
  //   };
  // }
    // Prepare data for insertion into the database
    const { artisanId, artisanfname, artisanlname, artisanemail, artisanphone,  artisaninfo} = validatedFields.data;
    // Insert data into the database
  try {
    await sql`
      UPDATE artisans
      SET id = ${artisanId}, 
      artisanfname = ${artisanfname},
      artisanlname = ${artisanlname}, 
      artisanemail = ${artisanemail}, 
      artisanphone = ${artisanphone}, 
      artisaninfo = ${artisaninfo}, 
      WHERE id = ${id}
    `;
  } catch (error) {
    return { message: 'Database Error: Failed to Update Artisan Bio.' };
  }
 
  revalidatePath('/handcrafted-haven/artisans');
  redirect('/handcrafted-haven/artisans');
}