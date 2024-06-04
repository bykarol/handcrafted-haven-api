import { Product } from "@/app/lib/definitions";
import Link from "next/link";
import Image from "next/image";
import { fetchReviewById } from "@/app/lib/data";

export default async function ProductCard({ product }: { product: Product }) {

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
      <div className="text-center flex flex-col gap-1">
        {product.artisanfname && (
          <p className="font-bold">Made by {`${product.artisanfname} ${product.artisanlname}`}</p>
        )}
        <Link href={`/handcrafted-haven/products/${product.id}`}>
          <Image
            className="rounded shadow"
            width={160}
            height={160}
            src={`/categories/${product.categoryname}/Product-${product.id}.webp`}
            alt={`Image for ${product.pname}`} />
        </Link>

        <Image
          className="m-2 "
          width={80}
          height={50}
          src={`/${totalRating}star.png`}
          alt={`Image of ${totalRating} stars review`} />

        <div className="">
          <Link href={`/handcrafted-haven/products/${product.id}`}>
            <h3 className="font-semibold">{product.pname}</h3>
          </Link>
          <p>Price: ${product.price}</p>
        </div>
      </div>

    </>
  );
};
