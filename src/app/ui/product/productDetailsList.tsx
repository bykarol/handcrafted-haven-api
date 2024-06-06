import ProductDetailsCard from './productDetailsCard';
import ProductCard from './productCard';
import { fetchAllProducts, fetchReviewByProduct } from '@/app/lib/data';
import { Product } from '@/app/lib/definitions';
import { randomNumbers } from '@/app/lib/utils';
import ReviewList from '../reviews/reviewList';
import Review from '../reviews/reviewForm';

import { fetchAllReviews } from '@/app/lib/data';

export default async function ProductDetailsList({
  productId,
}: {
  productId: number;
}) {
  const arrayReviews = await fetchAllReviews();
  const length = arrayReviews.length - 1;
  const nextReview = arrayReviews[length].id + 1;


  let currentPage = 1;
  const products = await fetchAllProducts(currentPage || 1); 

  // Calculate total rating per product
  const reviews = await fetchReviewByProduct(productId);
  const arrayId = productId - 1;
  const product = products[arrayId];
  let reviewTotal = 0;
  let totalRating = 0;

  if (reviews.length != 0) {
    reviews.map(
      (review) => (reviewTotal = reviewTotal + Number(review.reviewrating))
    );
    totalRating = Math.round(reviewTotal / reviews.length);
  }

  // Array with four random products
  const randomNumber = randomNumbers(products.length - 1);
  let productList: Array<Product> = [];
  for (let i = 0; i < 4; i++) {
    let id = randomNumber[i];
    if (id != productId) productList = productList.concat(products[id]);
  }

  return (
    <>
      <div className="flex flex-col flex-wrap place-content-center gap-16">
        <p className="text-4xl text-center">{product.pname}</p>

        {/* Product Details  */}
        <ProductDetailsCard product={product} totalRating={totalRating} />
      </div>

      {/* Display the reviews per product in product details */}
      <div className="border-t-2 border-golden">
        <h2 className="font-black text-2xl	my-10">Reviews</h2>
        <ReviewList productId={productId} />
        <Review productId={productId} nextReview={nextReview} />
      </div>

      {/* Recomendations */}
      <h2 className="border-t-2 border-golden text-2xl py-16 font-bold text-center">
        Check out these products we think you will enjoy
      </h2>
      <ul className="flex flex-row flex-wrap justify-evenly gap-16">
        {productList.map((product) => (
          <li key={product.id}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </>
  );
}
