import Image from "next/image";
import { primaryFont, secondaryFont } from '@/app/ui/fonts';
import { fetchAllProducts, fetchProductById } from "@/app/lib/data";


export default async function ProductDetailsCard({ productId }: { productId: number }) {
    const products = await fetchAllProducts();
    const product = await fetchProductById(productId);

    return (
        <div className="text-center">
            <h2 className={`text-4xl py-5`}>
                {product.pname}
            </h2>
            <div className="flex flex-col m-auto md:flex-row p-7 justify-center">
                <div className="flex flex-row md:flex-col gap-3">
                    <Image
                        className="border border-golden p-2 rounded"
                        src={`/categories/${product.categoryname}/Product-${product.id}-1.webp`}
                        alt={`Image for ${product?.pname}`}
                        width={70}
                        height={100}
                    />
                    <Image
                        className="border border-golden p-2 rounded"
                        src={`/categories/${product.categoryname}/Product-${product.id}-2.webp`}
                        alt={`Image for ${product?.pname}`}
                        width={70}
                        height={100}
                    />
                    <Image
                        className="border border-golden p-2 rounded"
                        src={`/categories/${product.categoryname}/Product-${product.id}-3.webp`}
                        alt={`Image for ${product?.pname}`}
                        width={70}
                        height={100}
                    />
                    <Image
                        className="border border-golden p-2 rounded"
                        src={`/categories/${product.categoryname}/Product-${product.id}-4.webp`}
                        alt={`Image for ${product?.pname}`}
                        width={70}
                        height={100}
                    />
                </div>

                <div className="py-5">
                    <Image
                        className="rounded shadow"
                        width={300}
                        height={330}
                        src={`/categories/${product.categoryname}/Product-${product.id}.webp`}
                        alt={`Image for ${product.pname}`}
                    />
                    <h2 className={`py-3 text-xl md:text-4xl ${secondaryFont.className}`}>
                        Made by {product.artisanfname} {product.artisanlname}
                    </h2>
                </div>
            </div>

            <p className="max-w-3xl text-paragraphs ">
                {product.product_description}
            </p>

            <div className="pt-5 text-2xl font-semibold">
                <p>
                    Price: ${product.price}
                </p>
            </div>
        </div>
    )
}