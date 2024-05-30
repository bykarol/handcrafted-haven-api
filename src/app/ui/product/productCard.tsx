import { Product } from "@/app/lib/definitions";
import Link from "next/link";
import Image from "next/image";

export default async function ProductCard({ product }: { product: Product }) {
  
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
          alt={`Image for ${product.artisan_id}`}              />
      </Link>
      <div className="">
      <Link href={`/handcrafted-haven/products/${product.id}`}>
        <h3 className="font-semibold">{product.pname}</h3>
        </Link>
        <p>Price: ${product.price}</p>
        {/* <p>Category ID: {product.category_id}</p> */}
        {/* {product.categoryname &&
          <p>Category: {product.categoryname}</p>} */}
        {/* <p>Artisan ID: {product.artisan_id}</p> */}
      </div>
      
          </div>
      
    </>
  );
};
