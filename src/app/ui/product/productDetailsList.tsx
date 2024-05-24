import ProductDetailsCard from "./productDetailsCard";
import ProductCard from "./productCard";
import { fetchAllProducts } from "@/app/lib/data";
import { Product } from "@/app/lib/definitions";
import { randomNumbers } from "@/app/lib/utils";

export default async function ProductDetailsList( {productId}: {productId: number} ) {
    const products = await fetchAllProducts();
    const randomNumber = randomNumbers(products.length-1);

    let displayProduct: Array<Product> = [];
    displayProduct = displayProduct.concat(products[--productId]);

    let productList: Array<Product> = []
    for (let i=0; i<4; i++) {
        let id =  randomNumber[i];
        if (++id != productId) productList = productList.concat(products[id]);
    }

    return (
        <>
            {/* Product Details  */}
            <ul className='flex flex-row flex-wrap justify-evenly gap-16'>
                {displayProduct.map((product) => (
                    <li key={product.id}>
                        <ProductDetailsCard product={product} />
                    </li>
                ))}
            </ul>

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