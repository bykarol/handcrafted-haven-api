import ProductDetailsCard from "./productDetailsCard";
import ProductCard from "./productCard";
import { fetchAllProducts } from "@/app/lib/data";
import { Product } from "@/app/lib/definitions"; 
import { randomNumbers } from "@/app/lib/utils";
import { Suspense } from "react";
import { ProductDetailsSkeleton } from "../skeletons";

export default async function ProductDetailsList( {productId}: {productId: number} ) {
    
    const products = await fetchAllProducts();
    
    // console.log(products);

    const randomNumber = randomNumbers(products.length-1);

    let productList: Array<Product> = []
    for (let i=0; i<4; i++) {
        let id =  randomNumber[i];
        if (++id != productId) productList = productList.concat(products[id]);
    }

    return (
        <>
            {/* Product Details  */}
            <div>
                <Suspense fallback={<ProductDetailsSkeleton />} >
                    < ProductDetailsCard product={products[productId-1]}/>
                </Suspense>
            </div>
            
            {/* Recomendations */}
            <h2 className='border-t border-golden text-2xl py-16 font-bold text-center'>Check out these products we think you will enjoy</h2>
            <ul className='flex flex-row flex-wrap justify-evenly gap-16'>
                {productList.map((product) => (
                <li key={product.id}>
                    <ProductCard product={product} />
                </li>
                ))}
            </ul>
        </>
    )
}