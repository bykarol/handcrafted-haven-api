import ProductDetailsCard from "./productDetailsCard";
import ProductCard from "./productCard";
import { fetchAllProducts, fetchReviewById  } from "@/app/lib/data";
import { Product } from "@/app/lib/definitions"; 
import { randomNumbers } from "@/app/lib/utils";
import Link from "next/link";
import ReviewList from "../reviews/reviewList";


export default async function ProductDetailsList( {productId}: {productId: number} ) {
    
    const products = await fetchAllProducts();
    const product = products[--productId];
    
    // Calculate total rating per product
    const reviews = await fetchReviewById(productId);
    let reviewTotal = 0;
    let totalRating = 0;

    if (reviews.length != 0) {
        reviews.map((review) => (
            reviewTotal = reviewTotal + Number(review.reviewrating)
        ))
        totalRating = Math.round(reviewTotal / reviews.length)
    }

    // Array with four random products
    const randomNumber = randomNumbers(products.length-1);
    let productList: Array<Product> = []
    for (let i=0; i<4; i++) {
        let id =  randomNumber[i];
        if (id != productId) productList = productList.concat(products[id]);
    }

    return (
        <>
            <div className='flex flex-col flex-wrap place-content-center gap-16'>
                <p className="text-4xl text-center"> 
                    {product.pname}
                </p>
                {/* Product Details  */}

                <div >
                    <div>   
                        < ProductDetailsCard product={product} totalRating={totalRating}/>
                    </div>
                </div>
            </div>

            <div className="text-end px-20 border-b-2 border-golden py-16">
                <Link href="#" className="bg-[#F7BE38] hover:bg-[#F7BE38]/60 rounded-lg text-2xl px-4 text-center inline-flex items-center">
                    <p>Add to the Cart</p>
                </Link>
            </div>
            

            {/* Display the reviews per product in product details */}
            <div>
                <h2 className="font-black text-2xl	">Reviews</h2>
                <ReviewList productId = {productId}/>

                <div className="flex mb-10">
                    <Link href={`/handcrafted-haven/reviews/create/${++productId}`} className="bg-[#F7BE38] hover:bg-[#F7BE38]/60 rounded-lg text-2xl px-4 text-center inline-flex items-center">
                        Add a review
                    </Link>
                </div>

            </div> 

            
            {/* Recomendations */}
            <h2 className='border-t-2 border-golden text-2xl py-16 font-bold text-center'>Check out these products we think you will enjoy</h2>
            <ul className='flex flex-row flex-wrap justify-evenly gap-16'>
                {productList.map((product) => (
                <li key={product.id}>
                    <ProductCard product={product} />
                </li>
                ))}
            </ul>


        </>
    )
}