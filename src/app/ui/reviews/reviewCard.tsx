'use client';

import { Reviews } from "@/app/lib/definitions";
import Image from "next/image";
import { anonymousReviewers } from "@/app/lib/utils";
import { deleteReview } from "@/app/lib/actions";
import Link from "next/link";
import { useSession } from 'next-auth/react';


export async function ReviewCard({review} : {review: Reviews}) {
    const { data: session } = useSession();
    //   console.log(review);

    return (
        <>
            {review.reviewrating && (
                <div className="flex justify-between mb-10">
                    <div>
                        {/* { review.buyer_id
                            ? <h2 className="font-bold"> {review.customerfname} {review.customerlname}</h2> 
                            : <h2 className="font-bold"> Anonymous Reviewer </h2> } */}
                        <h2 className="font-bold"> {anonymousReviewers()} </h2>
                        <h2 className="p-2"> {review.reviewdate} </h2>
                        <h2> {review.reviewdescription} </h2>
                        <Image
                            width={120}
                            height={50}
                            src={`/${review.reviewrating}star.png`}
                            alt={`Image of ${review.reviewrating} stars review`} />
                    </div>
                    {session?.user?.name &&
                        <button onClick={() => deleteReview(review.id)} className="text-red font-black text-2xl hover:text-5xl">&#215;</button>
                    }
                </div>

            )}
            
            {session?.user?.name &&
                <Link className="bg-golden text-textButtons font-bold rounded-md px-10 py-2 hover:bg-[#F7BE38]/60" href={`/handcrafted-haven/reviews/${review.id}/edit`}>Edit</Link>
            }
        </>
    )
}