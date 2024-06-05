import { Reviews } from "@/app/lib/definitions";
import Image from "next/image";
import { anonymousReviewers } from "@/app/lib/utils";

export async function ReviewCard({review} : {review: Reviews}) {

    //   console.log(review);

    return (
        <div>
            {review.reviewrating && (
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
            )}
            
        </div>
    )
}