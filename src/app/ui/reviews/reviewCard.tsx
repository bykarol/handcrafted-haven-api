import { Reviews } from "@/app/lib/definitions";
import Image from "next/image";

export async function ReviewCard({review} : {review: Reviews}) {

      //  console.log(review);
    return (
        <div>
            {review.reviewrating && (
                <div className="flex flex-col gap-5 shadow-2xl p-10">
                    <h2 className="font-bold"> {review.customerfname} {review.customerlname}</h2>
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