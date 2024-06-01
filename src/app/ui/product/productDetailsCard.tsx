import Image from "next/image";
import { primaryFont, secondaryFont } from '@/app/ui/fonts';
import Link from "next/link";
import { Product } from "@/app/lib/definitions";
import { ReviewCard } from "../reviews/reviewCard";
import { fetchReviewById } from "@/app/lib/data";


export default async function ProductDetailsCard( { product }: { product: Product } ) { 
    const images = [1, 2, 3, 4];

    // Calculate total rating per product
    const reviews = await fetchReviewById(product.id);
    let reviewTotal = 0;
    let totalRating = 0;

    if (reviews.length != 0) {
        reviews.map((review) => (
            reviewTotal = reviewTotal + Number(review.reviewrating)
        ))
        totalRating = Math.round(reviewTotal / reviews.length)
    }
    

    return (
        <>
            <div className='flex flex-col flex-wrap place-content-center gap-16'>
                <p className="text-4xl text-center"> 
                    {product.pname}
                </p>

                <div className="flex flex-col md:flex-row m-auto p-7 justify-center">
                    <div className="flex flex-row md:flex-col gap-3">   
                        { images.map((image) => (
                            <Image
                                key={product.id}
                                className="border border-golden p-2 rounded"
                                src={`/categories/${product.categoryname}/Product-${product.id}-${image}.webp`}
                                alt={`Image for ${product.artisan_id}`}
                                width={70}
                                height={100}
                            />
                        ))}
                    </div>

                    <div className="p-7">
                        <Image
                        className="rounded shadow"
                        width={300}
                        height={330}
                            src={`/categories/${product.categoryname}/Product-${product.id}.webp`}
                            alt={`Image for ${product.artisan_id}`}
                        />
                        <h2 className={`text-center text-xl md:text-4xl ${secondaryFont.className}`}>
                            Made by {product.artisanfname} {product.artisanlname}
                        </h2>
                        
                        <Image
                            className="m-2 "
                            width={120}
                            height={50}
                            src={`/${totalRating}star.png`}
                            alt={`Image of ${totalRating} stars review`} />
                    </div>
                </div>

                <p className="max-w-3xl text-center text-paragraphs ">
                    {product.product_description}
                </p>
                
                <div className="flex flex-wrap justify-center md:justify-between py-20 text-2xl font-semibold ">

                    <p className="flex gap-x-10 p-5">
                        Price: ${product.price}
                    </p>                 
                    
                    <Link href="#" className="bg-[#F7BE38] hover:bg-[#F7BE38]/60 rounded-lg text-2xl px-4 text-center inline-flex items-center">
                        <p>Add to the Cart</p>
                    </Link>
                </div>

            </div>

            {/* Display the reviews per product in product details */}
            <div className="mb-10">
                <h2 className="font-black text-2xl	">Reviews</h2>
                {reviews.length == 0 && (
                    <h2 className="p-4">Be the first to share your thoughts with a review!</h2>
                )}
                <ul className='flex flex-wrap justify-evenly gap-20'>
                    {reviews.map((review) => (
                        <li key={review.id}>
                            < ReviewCard review = {review} />
                        </li>
                    ))}
                </ul>
            </div>

            <div className="flex justify-end mb-10">
                <Link href={`/handcrafted-haven/reviews/`} className="bg-[#F7BE38] hover:bg-[#F7BE38]/60 rounded-lg text-2xl px-4 text-center inline-flex items-center">
                    Add a review
                </Link>
            </div>
            
        </>
    )
}