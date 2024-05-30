import { Product } from "@/app/lib/definitions";
import Image from "next/image";
import Link from "next/link";

export default async function ProductByArtisanCard({ product }: { product: Product }) {
  
  return (
    
    <div className="flex flex-col justify-evenly p-2 ">
      <Link href={`/handcrafted-haven/products/${product.id}`}>
          <Image
              src={`/categories/${product.categoryname}/Product-${product.id}.webp`}
              alt={`Image for ${product.artisan_id}`}
              width={200}
              height={200}
          />
      </Link>

      <div className="p-2 ">
        <h3 className="font-semibold py-2">{product.pname}</h3>
        <p>Price: ${product.price}</p>
      </div>     
    </div>
  );
};
