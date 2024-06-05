'use client';
import Image from "next/image";
import { primaryFont, secondaryFont } from '@/app/ui/fonts';
import { Product } from "@/app/lib/definitions";
import { AddProductToCart } from "@/app/lib/utils";
import { useState } from "react";


export default function ProductDetailsCard({ product, totalRating }: { product: Product, totalRating: number }) {
    const [showModal, setShowModal] = useState(false);
    const images = [1, 2, 3, 4];
    const handleClick = () => {
        const storedProducts = AddProductToCart(product);
        if (storedProducts) {
            setShowModal(true);
        }
    }

    return (
        <>
            <div className="text-center">
                <div className="flex flex-col md:flex-row m-auto p-7 justify-center">
                    <div className="flex flex-row md:flex-col gap-3">
                        {images.map((image) => (
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

                <p className="max-w-3xl  text-paragraphs ">
                    {product.product_description}
                </p>
                <div className="flex flex-col md:flex-row my-5 justify-evenly gap-5">
                    <p className="text-2xl font-semibold">
                        Price: ${product.price}
                    </p>
                    <button onClick={handleClick} className="bg-golden rounded-md px-10 py-2 hover:bg-[#F7BE38]/60">Add to Cart</button>
                </div>
            </div>

            {/* Modal */}
            {/* Modal de éxito */}
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    <div className="inset-0 bg-black opacity-75"></div>
                    <div className="bg-white rounded-lg overflow-hidden shadow-xl w-80">
                        <div className="p-8 bg-golden">
                            <h2 className="text-2xl font-semibold text-center mb-4">Success!</h2>
                            <p className="text-lg text-center mb-6">Product added to cart successfully.</p>
                            <button
                                className="z-50 block w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
                                onClick={() => setShowModal(false)}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </>
    );
}