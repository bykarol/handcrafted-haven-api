import { Product } from "@/app/lib/definitions";
import Link from "next/link";
import Image from "next/image";

export default async function ProductCard({ product }: { product: Product }) {
  
  return (
    <>

      {product.artisanfname && (
        <p className="text-center font-bold py-2">Made by {`${product.artisanfname} ${product.artisanlname}`}</p>
      )}
      <Link href={`#`}>
          <Image
              src={`/${product.id}.webp`}
              alt={`Image for ${product.artisan_id}`}
              width={200}
              height={200}
          />
      </Link>

      <div className="p-2 text-center">
        <h3 className="font-semibold py-2">{product.pname}</h3>
        <p>Price: ${product.price}</p>
        {/* <p>Category ID: {product.category_id}</p> */}
        {product.categoryname &&
          <p>Category: {product.categoryname}</p>}
        {/* <p>Artisan ID: {product.artisan_id}</p> */}
      </div>
      
      
    </>
  );
};
