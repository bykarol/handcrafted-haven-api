'use client';
import Link from "next/link";
import ReviewList from "@/app/ui/reviews/reviewList";
import ProductDetailsCard from "@/app/ui/product/productDetailsCard";
import ProductRecomendationsList from "@/app/ui/product/productRecomendationsList";
import { useSession } from 'next-auth/react';


export default function Page({ params }: { params: { id: number } }) {
  const { data: session } = useSession();
  const productId = params.id;

  return (
    <div className="flex flex-col place-items-center px-5 md:px-0">
      <div className='flex flex-col flex-wrap place-content-center gap-5'>
        {/* Product Details  */}

        <div >
          <div>
            {/* < ProductDetailsCard product={product} totalRating={totalRating} /> */}
            < ProductDetailsCard productId={productId} />
          </div>
        </div>


        <div className="text-end px-20 border-b-2 border-golden pb-10">
          <Link href="/handcrafted-haven/cart">
            <p className="bg-[#F7BE38] hover:bg-[#F7BE38]/60 rounded-lg py-2 text-2xl text-center">Add to the Cart</p>
          </Link>
        </div>


        {/* Display the reviews per product in product details */}
        <div>
          <h2 className="font-black text-2xl py-5">Reviews</h2>
          <ReviewList productId={productId} />
          {session?.user &&
            <div className="flex mb-10">
              <Link href={`/handcrafted-haven/reviews/create/${productId}`}>
                <p className="bg-[#F7BE38] hover:bg-[#F7BE38]/60 rounded-lg py-2 px-4 text-2xl text-center">
                  Add a review</p>
              </Link>
            </div>}
        </div>



        {/* Recommendations */}
        <h2 className='border-t-2 border-golden text-2xl py-10 font-bold text-center'>Check out these products we think you will enjoy</h2>
        <ProductRecomendationsList />
      </div>
    </div >
  )
}