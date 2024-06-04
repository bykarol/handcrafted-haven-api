import Image from "next/image";
import { primaryFont, secondaryFont } from '@/app/ui/fonts';
import { Product } from "@/app/lib/definitions";


export default async function ProductDetailsCard( { product, totalRating }: { product: Product, totalRating:number } ) { 
    const images = [1, 2, 3, 4];
   
        
    return (
        <>
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
                        alt={`Image of ${totalRating} stars review`} 
                    />
                </div>
            </div>
            

            <p className="max-w-3xl text-center text-paragraphs ">
                {product.product_description}
            </p>
            
            <div className="py-20 text-2xl font-semibold ">
                <p>
                    Price: ${product.price}
                </p>                 
            </div>
        </>
    )
}