import { Reviews } from "@/app/lib/definitions";
import { fetchReviewById } from "@/app/lib/data";
import { ReviewCard } from "./reviewCard";
import Link from "next/link";



export default async function ReviewList({productId}: {productId: number}) {
    
    const reviews = await fetchReviewById(productId);

    return (
        <>
            <div className="mb-10">
                
                {reviews.length == 0 && (
                    <h2 className="p-4">Be the first to share your thoughts with a review!</h2>
                )}

                {/* Display the reviews per product in product details */}

                <ul className='flex flex-wrap justify-evenly gap-20'>
                    {reviews.map((review) => (
                        <li className="flex flex-col gap-5 shadow-2xl p-10" key={review.id}>
                            < ReviewCard review = {review} />
                        </li>
                    ))}
                </ul>

            </div>
        </>
    )
}
           