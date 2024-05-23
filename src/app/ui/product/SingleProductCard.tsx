import { Product } from "@/app/lib/definitions";
import Image from "next/image";
import { primaryFont, secondaryFont } from '@/app/ui/fonts';


export default function SingleProductCard( { product }: { product: Product } ) { 
    const images = [1, 2, 3, 4];

    return (
        <>
            <p className="text-4xl text-center">
                {product.pname}
            </p>

            <div className="flex m-auto p-7 justify-center">
                <div className="mx-8">   
                    { images.map((image) => (
                        <Image
                            key={product.id}
                            className="border border-golden m-6 p-2"
                            src={`/Product-${product.id}-${image}.webp`}
                            alt={`Image for ${product.artisan_id}`}
                            width={70}
                            height={100}
                        />
                    ))}
                </div>

                <div className="p-7">
                    <Image
                        src={`/Product-${product.id}.webp`}
                        alt={`Image for ${product.artisan_id}`}
                        width={300}
                        height={330}
                    />
                    <h2 className={`text-center text-xl md:text-4xl ${secondaryFont.className}`}>
                        Made by {product.artisanfname} {product.artisanlname}
                    </h2>
                </div>
            </div>


            <div>
                <p className="max-w-3xl text-center text-paragraphs ">
                    This handmade pottery vase is a special creation made with love and care. Crafted by hand, it has a unique charm that adds warmth to any room. With its earthy colors and natural texture, it brings a touch of nature indoors. You can use it to hold flowers and plants, or simply let it stand alone as a beautiful decoration. Each vase is one-of-a-kind, with its own little imperfections that make it truly special. Whether you place it on a shelf, table, or windowsill, it adds a cozy and inviting feel to your space. Made to last, this pottery vase is a timeless piece of art that will bring joy and beauty to your home for years to come.                
                </p>
            </div>

            <div className="flex flex-wrap justify-center md:justify-between py-20 text-2xl font-semibold ">

                <p className="flex gap-x-10 p-5">
                    Price: ${product.price}
                </p>                 

                <button className="bg-[#F7BE38] hover:bg-[#F7BE38]/60 rounded-lg text-2xl px-4 text-center inline-flex items-center">
                    Add to cart
                </button>
            </div>

        </>
    
        
    )
}